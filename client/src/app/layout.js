import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./globals.css";

import Analytics from "@/components/cookies/Analytics";
import CookiesConsent from "@/components/cookies/CookiesConsent";
import CTASection from "@/components/CTASection";
import FacebookPixel from "@/components/facebookPixel/FacebookPixel";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/Navbar";
import SmoothScroll from "@/components/smoothScroll";
import { Baumans, Oswald, Poppins } from "next/font/google";
import Script from "next/script";
import Template from "./template";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});
const baumans = Baumans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-baumans",
});

gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Devion Ark | Dynamic Software & Digital Marketing Agency",
  description:
    "Your trusted partner for website development, digital marketing, SEO, custom software solutions, and consultancy. Drive growth with tailored strategies today!",
    icons: {
      icon: '/favicon.svg', // /public path
    },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devion Ark Digital Solutions",
    url: "https://www.devionark.com/",
    logo: "https://www.devionark.com/logo.png",
    description:
      "A leading software development and digital marketing agency in Bangladesh.",
    foundingDate: "2022", // Add if applicable
    founder: {
      "@type": "Person",
      name: "Syed Shaeduzzaman Noor",
      url: "https://www.linkedin.com/in/shaednoor/",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801782734573",
      contactType: "technical support",
      email: "info@devionark.com",
      areaServed: ["BD", "US", "GB"],
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [
      "https://www.facebook.com/devion.ark/",
      "https://www.linkedin.com/company/devion-ark/",
      "https://www.instagram.com/devionark/",
    ],
    address: {
      // Optional but recommended
      "@type": "PostalAddress",
      streetAddress: "08 Tootpara Central Rd",
      addressLocality: "Khulna",
      addressRegion: "Khulna",
      postalCode: "9100",
      addressCountry: "BD",
    },
    telephone: "+8801782734573",
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Devion Ark | Dynamic Software & Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Your trusted partner for website development, digital marketing, SEO, custom software solutions, and consultancy. Drive growth with tailored strategies today!"
        />
        <meta property="og:url" content="https://www.devionark.com" />
        <meta property="og:image" content="/og-image.jpg" />{" "}
        {/* Replace with your OG image URL */}
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Devion Ark | Dynamic Software & Digital Marketing Agency"
        />
        <meta
          name="twitter:description"
          content="Your trusted partner for website development, digital marketing, SEO, custom software solutions, and consultancy. Drive growth with tailored strategies today!"
        />
        <meta name="twitter:image" content="/og-image.jpg" />{" "}
        {/* Replace with your Twitter image URL */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3YRX0462MW"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3YRX0462MW');
          `}
        </Script>
      </head>
      <body
        className={`w-full ${poppins.variable} ${oswald.variable} antialiased overflow-x-hidden ${baumans.variable} relative min-h-screen`}
      >
        <Navbar />
        <Template>
          <SmoothScroll>
            {children}
            <CTASection />
          </SmoothScroll>
          <Footer />
        </Template>
        <CookiesConsent />
        <Analytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
