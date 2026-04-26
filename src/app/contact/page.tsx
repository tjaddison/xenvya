import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Xenvya",
  description:
    "Entity-level contact for Xenvya Consulting LLC. For product inquiries, visit the product directly.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 0 64px" }}>
        <div className="wrap">
          <div className="mono" style={{ marginBottom: "40px" }}>
            Contact
          </div>
          <h1 className="display-xl" style={{ maxWidth: "16ch" }}>
            One channel, used{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              sparingly
            </span>
            .
          </h1>
        </div>
      </section>

      <hr className="hr" />

      {/* Primary contact */}
      <section className="section">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Entity-level</div>
            <div>
              <p
                className="serif"
                style={{
                  fontSize: "28px",
                  lineHeight: "1.35",
                  color: "var(--ink-2)",
                  maxWidth: "44ch",
                  marginBottom: "40px",
                }}
              >
                For legal, partnership, press, or entity-level diligence
                inquiries, email the address below. Responses are considered and
                may not be immediate.
              </p>
              <a
                href="mailto:contact@xenvya.com"
                className="serif"
                style={{
                  fontSize: "48px",
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid var(--ink)",
                  paddingBottom: "4px",
                }}
              >
                contact@xenvya.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Routing */}
      <section className="section-sm">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Other inquiries — route accordingly</div>
            <div>
              <div className="routing-row">
                <div>
                  <div
                    className="serif"
                    style={{ fontSize: "26px", marginBottom: "4px" }}
                  >
                    Consulting
                  </div>
                  <div className="mono">Future engagements via Xenvya</div>
                </div>
                <div className="prose">
                  <p style={{ fontSize: "16px" }}>
                    Consulting is not currently offered through Xenvya. Inquiries
                    about future engagements may be sent to the entity address
                    above.
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <a href="mailto:contact@xenvya.com" className="link mono">
                    contact@xenvya.com ↗
                  </a>
                </div>
              </div>
              <div className="routing-row">
                <div>
                  <div
                    className="serif"
                    style={{ fontSize: "26px", marginBottom: "4px" }}
                  >
                    GovBiz.ai
                  </div>
                  <div className="mono">Product inquiries, support, sales</div>
                </div>
                <div className="prose">
                  <p style={{ fontSize: "16px" }}>
                    Handled at the product directly. Xenvya does not provide
                    product support.
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <a
                    href="https://govbiz.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link mono"
                  >
                    govbiz.ai ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Entity details */}
      <section className="section-sm">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Entity details</div>
            <div className="entity-grid">
              <div>
                <div className="mono" style={{ marginBottom: "8px" }}>
                  Legal name
                </div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Xenvya Consulting LLC
                </div>
              </div>
              <div>
                <div className="mono" style={{ marginBottom: "8px" }}>
                  Jurisdiction
                </div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Virginia, USA
                </div>
              </div>
              <div>
                <div className="mono" style={{ marginBottom: "8px" }}>
                  Ownership
                </div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Privately held
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
