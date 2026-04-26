import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Xenvya",
  description:
    "Xenvya Consulting LLC is a Virginia holding company established in August 2020 to own operating products.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 0 64px" }}>
        <div className="wrap">
          <div className="mono" style={{ marginBottom: "40px" }}>
            About
          </div>
          <h1 className="display-xl" style={{ maxWidth: "18ch" }}>
            Xenvya is a holding company.{" "}
            <span className="italic" style={{ color: "var(--accent)" }}>
              Nothing more, nothing less.
            </span>
          </h1>
        </div>
      </section>

      <hr className="hr" />

      {/* The entity */}
      <section className="section">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">The entity</div>
            <div className="prose">
              <p>
                Xenvya Consulting LLC was established in August 2020 in the
                Commonwealth of Virginia. It is privately held, owner-operated,
                and has no outside investors.
              </p>
              <p>
                Its purpose is to own operating products. In the future, it will
                also serve as the contracting entity for affiliated consulting
                engagements. Each operating product carries its own brand, its
                own domain, and its own positioning. Xenvya itself is
                deliberately quiet.
              </p>
              <p>
                A holding company&#39;s job is to own things well. That is the
                work here.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Facts */}
      <section className="section-sm">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Facts</div>
            <div>
              <div className="fact-row">
                <div className="mono">Legal name</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Xenvya Consulting LLC
                </div>
              </div>
              <div className="fact-row">
                <div className="mono">Jurisdiction</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Commonwealth of Virginia, USA
                </div>
              </div>
              <div className="fact-row">
                <div className="mono">Established</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  August 2020
                </div>
              </div>
              <div className="fact-row">
                <div className="mono">Ownership</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Privately held · Owner-operated
                </div>
              </div>
              <div className="fact-row">
                <div className="mono">Structure</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  Owner-operated · No outside capital
                </div>
              </div>
              <div className="fact-row">
                <div className="mono">Inquiries</div>
                <div className="serif" style={{ fontSize: "22px" }}>
                  <a href="mailto:contact@xenvya.com" className="link">
                    contact@xenvya.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Operating philosophy */}
      <section className="section">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Operating philosophy</div>
            <div className="prose">
              <p
                className="display-m serif"
                style={{
                  maxWidth: "26ch",
                  color: "var(--ink)",
                  marginBottom: "28px",
                }}
              >
                Eliminate the barriers that keep good work from reaching the
                people who need it.
              </p>
              <p>
                The thesis behind Xenvya is straightforward. A small number of
                operating products, built carefully and held for the long term,
                tends to do more useful work in the world than a larger number of
                products built in a hurry.
              </p>
              <p>
                Each product Xenvya owns is chosen for a domain where capability
                alone is not the constraint — where access, trust, or
                administrative friction is the real barrier. The work of each
                product is to remove that barrier.
              </p>
              <p>Xenvya itself stays out of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* Portfolio relationship */}
      <section className="section-sm">
        <div className="wrap">
          <div className="grid-sidebar">
            <div className="mono">Relationship to other properties</div>
            <div className="prose">
              <p>
                <a
                  href="https://govbiz.ai"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GovBiz.ai
                </a>{" "}
                is an operating product wholly owned by Xenvya — an AI agent for
                federal contractors. It is marketed and sold under its own brand.
                Product inquiries belong there.
              </p>
              <p>
                In the future, Xenvya will serve as the contracting entity for
                affiliated consulting engagements. Until that work is formally
                offered, this site is the canonical reference for the entity
                itself.
              </p>
              <p>
                This site is for the entity itself — its identity, its portfolio
                at a glance, and a single point of contact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
