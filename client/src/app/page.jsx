import CTASection from "@/components/CTASection";
import FAQSection from "@/components/faq";
import Footer from "@/components/footer";
import LandingSection from "@/components/landingSection";
import OurServices from "@/components/ourServices";
import Partners from "@/components/partners/Partners";
import Portfolio from "@/components/portfolio/Portfolio";
import ProjectShowcase from "@/components/projectShowcase";
import Testimonials from "@/components/testimonials";
import WhoWeAre from "@/components/whoWeAre/WhoWeAre";

export default function Home() {
  return (
    <main className="font-poppins">
      <LandingSection />
      <Partners />
      <WhoWeAre />
      <Portfolio />
      <OurServices />
      <ProjectShowcase />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
