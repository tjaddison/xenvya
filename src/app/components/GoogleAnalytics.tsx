'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-2RL47EC98B';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      window.gtag?.('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    const sendTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      window.gtag?.('event', 'time_on_page', {
        page_path: pathname,
        time_seconds: timeSpent,
      });
    };

    window.addEventListener('beforeunload', sendTimeSpent);

    return () => {
      window.removeEventListener('beforeunload', sendTimeSpent);
      sendTimeSpent();
    };
  }, [pathname]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: false
            });
          `
        }}
      />
    </>
  );
}
