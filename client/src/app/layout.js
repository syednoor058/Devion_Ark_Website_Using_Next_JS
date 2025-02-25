import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./globals.css";

import CTASection from "@/components/CTASection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar/Navbar";
import SmoothScroll from "@/components/smoothScroll";
import { Baumans, Oswald, Poppins } from 'next/font/google';
import Template from "./template";
const poppins = Poppins({ subsets: ['latin'], weight: ["100","300","400","500","700","900"], variable: "--font-poppins" });
const oswald = Oswald({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700"], variable: "--font-oswald" });
const baumans = Baumans({ subsets: ['latin'], weight: ["400"], variable: "--font-baumans" })

gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Devion Ark | Innovative IT Solutions for Your Business Success",
  description: "Explore cutting-edge IT solutions with Devion Ark for businesses of all sizes. From e-commerce development and custom management systems to SEO optimization and digital marketing strategies, we deliver tailored services to drive your growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body
        className={`w-full ${poppins.variable} ${oswald.variable} antialiased overflow-x-hidden ${baumans.variable}`}
      >
        <Template>
          <Navbar />
          <SmoothScroll>    
            {children}
            <CTASection />
          </SmoothScroll>
          <Footer />
        </Template>
      </body>
    </html>
  );
}
