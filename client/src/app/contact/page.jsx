function Contact() {
  return (
    <main>
      <div className="w-full h-full bg-darkPrimary pt-10 relative font-light text-lightSecondary pb-10 lg:pb-20 px-4 lg:px-20">
        <div className="flex flex-col gap-10">
          <div className="text-lightPrimary font-semibold leading-[1.10] text-5xl lg:text-8xl flex flex-col lg:flex-row gap-5 lg:gap-10">
            <div className="w-[40%] lg:w-[30%] aspect-square bg-[url(https://res.cloudinary.com/de8g5laai/image/upload/v1740292746/get_in_touch_m30np5.gif)] bg-no-repeat bg-contain"></div>
            <div className="w-full lg:w-[70%]">
              <h1>Get in touch.</h1>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div className="w-full lg:w-[50%] flex flex-col gap-10 lg:gap-20">
              <p className="text-xl lg:text-4xl">
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
              <form className="flex flex-col gap-3 text-lg">
                <div className="flex flex-col gap-2">
                  <label>Name *</label>
                  <input className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Company</label>
                  <input className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Interest in *</label>
                  <input className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Email *</label>
                  <input className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Phone *</label>
                  <input className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <label>Description</label>
                  <textarea
                    className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded-sm px-5 py-2"
                    rows={4}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
