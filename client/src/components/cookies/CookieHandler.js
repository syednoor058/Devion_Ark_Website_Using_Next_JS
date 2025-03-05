// components/CookieHandler.js (CLIENT COMPONENT)
"use client";

import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import CookiesConsent from './CookiesConsent';

export default function CookieHandler() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!getCookie('cookieConsent')) {
      setShowBanner(true);
    }
  }, []);

  return (
    <>
      {showBanner && <CookiesConsent />}
    </>
  );
}