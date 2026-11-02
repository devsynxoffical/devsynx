import Link from "next/link";
import { priorityPageLinks } from "@/seo/priorityPages";

type Props = {
  title?: string;
  className?: string;
  limit?: number;
};

export function SeoPriorityLinks({
  title = "Popular Pages",
  className = "",
  limit,
}: Props) {
  const links = limit ? priorityPageLinks.slice(0, limit) : priorityPageLinks;

  return (
    <nav className={className} aria-label={title}>
      <div className="footer__title">{title}</div>
      <ul className="footer__links footer__links--wrap">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="footer__link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
