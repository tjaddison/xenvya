"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" aria-label="Xenvya" style={{ color: "var(--ink)" }}>
          <span className="wordmark" style={{ color: "var(--ink)" }}>
            XENVYA
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Portfolio
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
