import CTASection from "@/components/CTASection";
import Footer from "@/components/footer";
import ServicesDetails from "@/components/serviceComponents/serviceDetails";
import ServiceLandingSection from "@/components/serviceComponents/serviceLandingSection";

export const metadata = {
  title: "Our Services | Software, SEO & Business Growth | Devion Ark",
  description:
    "Devion Ark is a leading IT firm specializing in software & website development, SEO, social media marketing, search engine marketing, and business consultancy. We help startups and local businesses grow their brand online with cutting-edge digital solutions. Let’s build your success today!",
};

function Services() {
  return (
    <main className="font-poppins">
      <ServiceLandingSection />
      <ServicesDetails />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Services;
