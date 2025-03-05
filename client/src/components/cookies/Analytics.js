// components/Analytics.js
"use client";

import { getCookie } from 'cookies-next';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Analytics() {
  const hasFullConsent = getCookie('cookiePreferences') === 'all';
  const hasAnalyticsConsent = getCookie('analyticsConsent') === 'granted';

  useEffect(() => {
    if (hasFullConsent || hasAnalyticsConsent) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function(){};
      
      gtag('js', new Date());
      gtag('config', 'G-3YRX0462MW');
    }
  }, [hasFullConsent, hasAnalyticsConsent]);

  return (hasFullConsent || hasAnalyticsConsent) ? (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-3YRX0462MW"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
      </Script>
    </>
  ) : null;
}