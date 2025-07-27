import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';
import SearchParamsTracker from './components/SearchParamsTracker';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xenvya | AI Readiness Consulting & Implementation",
  description: "Stop wasting money on AI tools your team can't use. We build essential AI capabilities through our CORE Method—transforming software investments into business results.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col min-h-screen w-full`}
      >
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <SearchParamsTracker />
        </Suspense>
        <Header />
        <main className="flex-grow w-full">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
