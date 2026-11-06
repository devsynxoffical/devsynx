import os
import sys
import ftplib
import ssl
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

FTP_HOST = "ftp.devsynx.com"
FTP_PORT = 21
FTP_USER = os.environ.get("FTP_USER", "devsynx@devsynx.com")
FTP_PASS = os.environ.get("FTP_PASS", "Allah512@@")
LOCAL_OUT = os.path.abspath("frontend/out")

def get_ftps():
    for attempt in range(3):
        try:
            ftps = ftplib.FTP_TLS()
            ftps.connect(FTP_HOST, FTP_PORT, timeout=30)
            ftps.login(FTP_USER, FTP_PASS)
            ftps.prot_p()
            return ftps
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(1)

def ensure_remote_dir(ftps, remote_dir):
    """Recursively ensure remote directory exists using PWD tracking."""
    if not remote_dir or remote_dir == "/":
        return
    parts = [p for p in remote_dir.strip("/").split("/") if p]
    ftps.cwd("/")
    for part in parts:
        try:
            ftps.cwd(part)
        except Exception:
            try:
                ftps.mkd(part)
                ftps.cwd(part)
            except Exception:
                # Could be a race condition with other threads, try cwd again
                try:
                    ftps.cwd(part)
                except Exception:
                    pass

def collect_files():
    all_files = []
    for root, dirs, files in os.walk(LOCAL_OUT):
        for f in files:
            local_path = os.path.join(root, f)
            rel_path = os.path.relpath(local_path, LOCAL_OUT)
            remote_path = "/" + rel_path.replace("\\", "/")
            all_files.append((local_path, remote_path))
    return all_files

def upload_worker(files_chunk, worker_id):
    ftps = get_ftps()
    count = 0
    dirs_seen = set()
    for local_path, remote_path in files_chunk:
        remote_dir = os.path.dirname(remote_path)
        if remote_dir not in dirs_seen:
            ensure_remote_dir(ftps, remote_dir)
            dirs_seen.add(remote_dir)
        
        file_name = os.path.basename(remote_path)
        ftps.cwd(remote_dir if remote_dir else "/")
        
        # Upload with retry
        for attempt in range(3):
            try:
                with open(local_path, "rb") as fp:
                    ftps.storbinary(f"STOR {file_name}", fp)
                count += 1
                break
            except Exception as e:
                if attempt == 2:
                    print(f"[{worker_id}] FAILED to upload {remote_path}: {e}")
                else:
                    time.sleep(0.5)
                    try:
                        ftps.quit()
                    except Exception:
                        pass
                    ftps = get_ftps()
                    ftps.cwd(remote_dir if remote_dir else "/")
    try:
        ftps.quit()
    except Exception:
        pass
    return count

def main():
    print("Collecting files from:", LOCAL_OUT)
    files = collect_files()
    total = len(files)
    print(f"Total files to deploy: {total}")

    # Prioritize:
    # 1. Root files & Core hubs (about, contact, services, team, clients, blog, portfolio, solutions, usa)
    # 2. Other HTML/TXT routes
    # 3. Static assets (_next/...)
    def sort_key(item):
        lp, rp = item
        if rp.startswith("/_next"):
            return 3
        if rp.count("/") <= 2:
            return 1
        return 2

    files.sort(key=sort_key)

    NUM_WORKERS = 6
    # Chunk files round-robin
    chunks = [[] for _ in range(NUM_WORKERS)]
    for i, file_info in enumerate(files):
        chunks[i % NUM_WORKERS].append(file_info)

    start_time = time.time()
    uploaded_total = 0
    with ThreadPoolExecutor(max_workers=NUM_WORKERS) as executor:
        futures = {executor.submit(upload_worker, chunk, f"W{i}"): i for i, chunk in enumerate(chunks)}
        for future in as_completed(futures):
            worker_id = futures[future]
            try:
                cnt = future.result()
                uploaded_total += cnt
                print(f"Worker {worker_id} finished: {cnt} files")
            except Exception as e:
                print(f"Worker {worker_id} crashed: {e}")

    elapsed = time.time() - start_time
    print(f"=== DEPLOY COMPLETE: {uploaded_total}/{total} files in {elapsed:.1f}s ===")

if __name__ == "__main__":
    main()
