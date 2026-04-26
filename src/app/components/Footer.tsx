import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="row">
          <div className="mono">
            © 2020–{new Date().getFullYear()} Xenvya Consulting LLC · Virginia,
            USA
          </div>
          <div className="mono" style={{ display: "flex", gap: "28px" }}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
