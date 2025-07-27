'use client';

import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: number;
  minWidth?: number;
}

export default function CalendlyWidget({ 
  url, 
  height = 700, 
  minWidth = 320 
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Check if Calendly script is already loaded
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Cleanup: remove script when component unmounts
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{ 
        minWidth: `${minWidth}px`, 
        height: `${height}px` 
      }}
    />
  );
}