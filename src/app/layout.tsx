import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ReactNode, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import SearchParamsTracker from "./components/SearchParamsTracker";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Xenvya — Holding company",
  description:
    "Xenvya Consulting LLC is a Virginia-based holding company established August 2020. It houses operating products including GovBiz.ai.",
  openGraph: {
    title: "Xenvya",
    description: "A Virginia-based, owner-operated holding company.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xenvya Consulting LLC",
              url: "https://xenvya.com",
              legalName: "Xenvya Consulting LLC",
              foundingDate: "2020-08",
              foundingLocation: "Virginia, USA",
              email: "contact@xenvya.com",
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "GovBiz.ai",
                  url: "https://govbiz.ai",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      >
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <SearchParamsTracker />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
