import ContactForm from "@/components/forms/ContactForm";
import Head from "next/head";

export const metadata = {
  title: "Contact Devion Ark | Let’s Build Your Digital Success Together",
  description:
    "Ready to transform your business? Reach our team of digital architects for custom web apps, CRM solutions, and growth strategies. Schedule a free consultation or drop us a message – we respond in 24 hours!",
};

function Contact() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.devionark.com/contact/" />
      </Head>
      <main>
        <div className="w-full h-full bg-darkPrimary pt-5 lg:pt-10 relative font-light text-lightSecondary pb-10 lg:pb-20 px-4 lg:px-20">
          <div className="flex flex-col gap-10">
            <div className="text-lightPrimary font-semibold leading-[1.10] text-5xl lg:text-8xl flex flex-col lg:flex-row gap-5 lg:gap-10">
              <div className="w-[40%] lg:w-[30%] aspect-square bg-[url(https://res.cloudinary.com/de8g5laai/image/upload/v1740292746/get_in_touch_m30np5.gif)] bg-no-repeat bg-contain"></div>
              <div className="w-full lg:w-[70%]">
                <h1>Get in touch.</h1>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
              <div className="w-full lg:w-[50%] flex flex-col gap-10 lg:gap-20">
                <p className="text-xl lg:text-4xl lg:indent-20">
                  If you have any questions or you'd like to find out more about
                  our services, please get in touch.
                </p>
                <div className="flex flex-col gap-5 text-lg">
                  <p className="text-lightPrimary font-normal">
                    Contact details:
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    <p>
                      Address: 08 Tootpara Central Rd, Khulna-9100, Bangladesh
                    </p>
                    <p>Mobile: +88 01782 734573</p>
                    <p>Email: info@devionark.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[50%]">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
