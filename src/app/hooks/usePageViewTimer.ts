'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function usePageViewTimer() {
  const pathname = usePathname();
  
  useEffect(() => {
    const startTime = Date.now();
    
    // Function to send time spent when user leaves the page
    const sendTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      window.gtag?.('event', 'time_on_page', {
        page_path: pathname,
        time_seconds: timeSpent
      });
    };
    
    // Add event listeners for when user leaves the page
    window.addEventListener('beforeunload', sendTimeSpent);
    
    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', sendTimeSpent);
      sendTimeSpent(); // Also send when component unmounts (page change)
    };
  }, [pathname]);
} 