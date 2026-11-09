"use client";

import Script from "next/script";
import { useConsent } from "./ConsentProvider";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// Loads Google Analytics only after the visitor has consented to "Statistik".
// Without NEXT_PUBLIC_GA_ID set, nothing is loaded at all.
export default function GoogleAnalytics() {
  const { consent } = useConsent();
  if (!GA_ID || !consent?.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
