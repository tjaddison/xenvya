'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-2RL47EC98B'; // Your measurement ID from the screenshot

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // Page view tracking
      window.gtag?.('event', 'page_view', {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // Set up intersection observers for section tracking
  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Track sections by their IDs
      const sectionIds = ['solutions', 'approach', 'values', 'contact'];
      const sectionObservers: { [key: string]: { observer: IntersectionObserver, startTime: number | null } } = {};
      
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          let startTime: number | null = null;
          
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                // Section came into view
                startTime = Date.now();
                window.gtag?.('event', 'section_view', {
                  section_id: id,
                  section_name: id.charAt(0).toUpperCase() + id.slice(1)
                });
              } else if (startTime !== null) {
                // Section went out of view - calculate time spent
                const timeSpent = Math.round((Date.now() - startTime) / 1000);
                window.gtag?.('event', 'section_time', {
                  section_id: id,
                  section_name: id.charAt(0).toUpperCase() + id.slice(1),
                  time_seconds: timeSpent
                });
                startTime = null;
              }
            });
          }, { threshold: 0.2 }); // Consider section in view when 20% visible
          
          observer.observe(section);
          sectionObservers[id] = { observer, startTime };
        }
      });
      
      // Cleanup function
      return () => {
        Object.values(sectionObservers).forEach(({ observer }) => {
          observer.disconnect();
        });
      };
    }
  }, [pathname]);

  // Track button clicks
  useEffect(() => {
    const trackButtonClicks = () => {
      const buttons = document.querySelectorAll('button, a, [role="button"]');
      
      buttons.forEach(button => {
        button.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const buttonText = target.innerText || '';
          const buttonId = target.id || '';
          const buttonClass = target.className || '';
          const buttonHref = target instanceof HTMLAnchorElement ? target.href : '';
          
          window.gtag?.('event', 'button_click', {
            button_text: buttonText.substring(0, 30), // Limit text length
            button_id: buttonId,
            button_class: buttonClass.substring(0, 50), // Limit class length
            button_href: buttonHref,
            page_path: pathname
          });
        });
      });
    };
    
    // Run after a short delay to ensure DOM is fully loaded
    const timer = setTimeout(trackButtonClicks, 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Google Analytics Script */}
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