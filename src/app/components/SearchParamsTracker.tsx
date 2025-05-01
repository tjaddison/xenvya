'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function SearchParamsTracker() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    if (searchParams?.toString()) {
      window.gtag?.('event', 'search_params', {
        search_params: searchParams.toString()
      });
    }
  }, [searchParams]);
  
  return null; // This component doesn't render anything
} 