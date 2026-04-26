import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 0 96px" }}>
        <div className="wrap">
          <div className="mono" style={{ marginBottom: "40px" }}>
            Xenvya Consulting LLC · Est. August 2020 · Virginia, USA
          </div>
          <h1 className="display-xl" style={{ maxWidth: "18ch" }}>
            A holding company for operating products and{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              affiliated
            </span>{" "}
            work.
          </h1>
          <div className="prose" style={{ marginTop: "48px", maxWidth: "62ch" }}>
            <p>
              Xenvya is a privately held, owner-operated company. It exists to
              house independent operating products. In the future, it will also
              serve as the contracting entity for affiliated consulting
              engagements.
            </p>
            <p>
              It is a legal and financial entity — not a product, service, or
              consumer-facing brand.
            </p>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Portfolio */}
      <section style={{ padding: "96px 0 0" }}>
        <div className="wrap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div className="mono">Portfolio</div>
            <div className="mono" style={{ color: "var(--ink-4)" }}>
              01 operating product
            </div>
          </div>

          {/* GovBiz.ai */}
          <a
            href="https://govbiz.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-row"
            style={{ color: "var(--ink)" }}
          >
            <div>
              <div
                className="serif"
                style={{ fontSize: "30px", letterSpacing: "-0.01em" }}
              >
                GovBiz
                <span style={{ color: "var(--ink-4)" }}>.ai</span>
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--ink-2)",
                  maxWidth: "52ch",
                  lineHeight: "1.55",
                }}
              >
                AI agent for federal contractors. Finds the right contracts,
                flags compliance risks, and turns weeks of admin into a morning
                briefing.
              </p>
            </div>
            <div style={{ textAlign: "right" }} className="mono">
              govbiz.ai ↗
            </div>
          </a>

          {/* Forthcoming */}
          <div className="portfolio-row" style={{ color: "var(--ink-4)" }}>
            <div>
              <div className="serif italic" style={{ fontSize: "26px" }}>
                Forthcoming
              </div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--ink-4)",
                  maxWidth: "52ch",
                  lineHeight: "1.55",
                }}
              >
                Additional operating products will be announced at launch. Each
                will carry its own brand and its own domain.
              </p>
            </div>
            <div style={{ textAlign: "right" }} className="mono">
              —
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">About</div>
            <div>
              <p
                className="display-m serif"
                style={{ maxWidth: "26ch", marginBottom: "28px" }}
              >
                Xenvya Consulting LLC is a Virginia LLC established in August
                2020. It is privately held and{" "}
                <span className="italic">owner-operated</span>.
              </p>
              <div className="prose">
                <p>
                  A holding company&#39;s job is to own things well. Xenvya
                  keeps each operating product independent in brand and
                  positioning, and keeps its own presence deliberately quiet.
                </p>
              </div>
              <div style={{ marginTop: "32px" }}>
                <Link href="/about" className="link mono">
                  More about the entity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Contact strip */}
      <section className="section-sm">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Contact</div>
            <div>
              <div
                className="serif"
                style={{
                  fontSize: "28px",
                  lineHeight: "1.3",
                  marginBottom: "14px",
                }}
              >
                Entity-level inquiries — legal, partnership, press.
              </div>
              <a
                href="mailto:contact@xenvya.com"
                className="link serif"
                style={{ fontSize: "22px" }}
              >
                contact@xenvya.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
