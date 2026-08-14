# 🚀 Deployment Guide for iHosting.pk

This guide will help you deploy your Devsynx website to iHosting.pk hosting.

## 📦 Step 1: Build the Project (Already Done)

The project has been built successfully. The static files are in the `out` folder.

## 📤 Step 2: Prepare Files for Upload

### Files to Upload:
Upload ALL contents from the `frontend/out` folder to your hosting's `public_html` directory.

**Important**: Upload the CONTENTS of the `out` folder, NOT the folder itself.

### File Structure Should Be:
```
public_html/
├── .htaccess          (for routing)
├── index.html
├── 404.html
├── 404/
│   └── index.html
├── _next/
│   └── static/
│       └── chunks/
│       └── media/
├── icons/
│   ├── app-development.png
│   ├── cloud-computing.png
│   ├── encrypted.png
│   ├── hrm.png
│   ├── launch.png
│   └── travel-agent.png
├── logo.jpg
├── logo2.jpg
├── logo.png
├── ChatGPT Image Nov 3, 2025, 11_01_37 AM.png
├── favicon.ico
└── ... (all other files)
```

## 🔧 Step 3: Upload Files to iHosting.pk

### Method 1: Using File Manager (cPanel)

1. **Login to cPanel**:
   - Go to your iHosting.pk client area
   - Login to cPanel

2. **Open File Manager**:
   - Find "File Manager" in cPanel
   - Navigate to `public_html` folder

3. **Upload Files**:
   - Select all files from `frontend/out` folder
   - Upload them to `public_html`
   - Make sure `.htaccess` file is uploaded (it might be hidden)

4. **Set Permissions**:
   - Files: `644` (rw-r--r--)
   - Folders: `755` (rwxr-xr-x)
   - `.htaccess`: `644`

### Method 2: Using FTP/SFTP

1. **Get FTP Credentials**:
   - From iHosting.pk control panel
   - Usually provided in welcome email

2. **Connect via FTP Client** (FileZilla, WinSCP, etc.):
   - Host: Your FTP host (e.g., ftp.yourdomain.com)
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

3. **Upload Files**:
   - Navigate to `public_html` on server
   - Upload all contents from `frontend/out` folder
   - Make sure to upload `.htaccess` file

4. **Verify Upload**:
   - Check that `index.html` is in `public_html`
   - Check that `_next` folder is uploaded
   - Check that all images are uploaded

## ✅ Step 4: Configure Domain

1. **Point Domain** (if not already):
   - In cPanel, go to "Domains" or "Addon Domains"
   - Make sure your domain points to `public_html`

2. **Enable SSL**:
   - In cPanel, find "SSL/TLS Status"
   - Enable SSL certificate (Let's Encrypt is free)
   - Force HTTPS redirect (optional)

## 🔍 Step 5: Test Your Site

After uploading, test:

- [ ] Homepage loads: `https://yourdomain.com`
- [ ] All images display correctly
- [ ] Icons are visible
- [ ] CSS styles are applied
- [ ] All sections display properly
- [ ] Navigation works
- [ ] 404 page works: `https://yourdomain.com/nonexistent-page`

## 🛠️ Troubleshooting

### Images Not Loading:
- Check file paths in `_next` folder
- Verify all files are uploaded
- Check file permissions (644 for files)

### CSS Not Loading:
- Clear browser cache
- Check browser console for errors
- Verify `_next/static` folder is uploaded

### 404 Errors:
- Ensure `.htaccess` file is uploaded
- Check file permissions on `.htaccess` (644)
- Verify mod_rewrite is enabled on server

### Slow Loading:
- Check if images are optimized
- Enable compression in cPanel
- Check server resources

## 📋 Checklist Before Upload

- [ ] Build completed successfully (`npm run build`)
- [ ] All files are in `out` folder
- [ ] `.htaccess` file is created
- [ ] Domain is pointed to hosting
- [ ] FTP/cPanel access is ready

## 📞 Need Help?

### iHosting.pk Support:
- **Email**: Check your hosting package details
- **Live Chat**: Available in client area
- **Phone**: Check hosting package

### Common Issues:

**Permission Errors:**
```bash
Files: chmod 644
Folders: chmod 755
```

**Missing .htaccess:**
- Enable "Show hidden files" in File Manager
- Upload `.htaccess` manually if needed

**Domain Not Loading:**
- Wait 24-48 hours for DNS propagation
- Check DNS settings in domain panel

---

## 🎉 Success!

Once uploaded and tested, your site will be live at:
**https://yourdomain.com**

---

**Note**: It may take a few minutes to several hours for DNS changes to propagate worldwide.
