import ActionButton from "@/components/buttons/ActionButton";
function ServicesDetails() {
  return (
    <div className="w-full px-5 lg:px-20 bg-black py-10 lg:py-20">
      <div className="w-full flex flex-col gap-5 lg:gap-10">
        <div className="w-full text-accentColor font-oswald font-bold uppercase text-center text-[7vw]">
          <h2>At your service</h2>
        </div>
        <div className="w-full flex flex-col gap-5 lg:gap-10">
          <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
            <div className="w-full lg:w-[50%] rounded-xl bg-lightPrimary p-5">
              <div className="w-full flex flex-col gap-5">
                <div className="text-darkPrimary text-[4vw] font-semibold leading-none font-oswald">
                  <h3>Custom Software Development</h3>
                </div>
                <p className="font-light leading-tight text-lg text-darkSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  a esse, nostrum sint eos beatae eum, nam odio eveniet
                  expedita, sed deleniti nobis accusantium delectus ex.
                </p>
                <div className="w-full flex justify-end">
                  <div className="w-full flex justify-end">
                    <ActionButton
                      forwardTo=""
                      label="Explore Our Works"
                      labelColor="text-darkPrimary"
                      labelHoverColor="text-lightPrimary"
                      bgColor="bg-darkPrimary"
                      labelSize="text-lg"
                      borderColor="border-darkPrimary"
                      iconColor="text-lightPrimary"
                      iconSize="text-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] rounded-xl bg-darkSecondary p-5">
              <div className="w-full h-full flex flex-row gap-5">
                <div className="w-[30%] h-full bg-white">.</div>
                <div className="w-[70%] flex flex-col gap-5">
                  <div className="text-lightPrimary text-[3vw] font-semibold leading-none font-oswald">
                    <h3>Website Development</h3>
                  </div>
                  <p className="font-light leading-tight text-base text-lightSecondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi a esse, nostrum sint eos beatae eum, nam odio eveniet
                    expedita, sed deleniti nobis accusantium delectus ex.
                  </p>
                  <div className="w-full flex justify-end">
                    <div className="w-full flex justify-end">
                      <ActionButton
                        forwardTo=""
                        label="Explore More"
                        labelColor="text-accentColor"
                        labelHoverColor="text-darkPrimary"
                        bgColor="bg-accentColor"
                        labelSize="text-base"
                        borderColor="border-accentColor"
                        iconColor="text-darkPrimary"
                        iconSize="text-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col lg:flex-row gap-5 lg:gap-10">
            <div className="w-full lg:w-[30%] h-full bg-accentColor rounded-xl p-5">
              <div className="w-full flex flex-col gap-5">
                <div className="text-darkPrimary text-[4vw] font-semibold leading-none font-oswald">
                  <h3>Social Media Marketing</h3>
                </div>
                <div className="w-full aspect-square bg-darkPrimary"></div>
                <p className="font-light leading-tight text-lg text-darkSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  a esse, nostrum sint eos beatae eum, nam odio eveniet
                  expedita, sed deleniti nobis accusantium delectus ex.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[70%] h-full">
              <div className="w-full flex flex-col gap-5 lg:gap-10">
                <div className="w-full h-full rounded-xl p-5 bg-lightPrimary">
                  <div className="w-full h-full flex flex-row gap-5">
                    <div className="w-[70%] flex flex-col gap-5 ">
                      <div className="text-darkPrimary text-[4vw] font-semibold leading-none font-oswald">
                        <h3>Social Media Marketing</h3>
                      </div>
                      <p className="font-light leading-tight text-lg text-darkSecondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi a esse, nostrum sint eos beatae eum, nam odio
                        eveniet expedita, sed deleniti nobis accusantium
                        delectus ex.
                      </p>
                      <div className="w-full flex">
                        <div className="w-full flex">
                          <ActionButton
                            forwardTo=""
                            label="Learn More"
                            labelColor="text-darkPrimary"
                            labelHoverColor="text-lightPrimary"
                            bgColor="bg-darkPrimary"
                            labelSize="text-lg"
                            borderColor="border-darkPrimary"
                            iconColor="text-lightPrimary"
                            iconSize="text-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[30%] h-full bg-darkSecondary"></div>
                  </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10">
                  <div className="w-full lg:w-[50%] rounded-xl bg-darkPrimary p-5">
                    <div className="w-full flex flex-col gap-5">
                      <div className="w-full flex flex-row gap-5">
                        <div className="w-[80%]">
                          <div className="text-accentColor text-[3vw] font-semibold leading-none font-oswald">
                            <h3>Search Engine Marketing</h3>
                          </div>
                        </div>
                        <div className="w-[20%] ">
                          <div className="w-full aspect-square flex justify-center items-center bg-red-400"></div>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-3 font-light leading-tight text-base text-lightSecondary list-disc ps-5">
                        <li>On-Page Optimization</li>
                        <li>Off-Page SEO</li>
                        <li>Technical SEO Audits</li>
                        <li>Keyword Research</li>
                        <li>Link Building</li>
                        <li>Local SEO</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-full lg:w-[50%] rounded-xl bg-accentColor p-5">
                    <div className="w-full flex flex-col gap-5">
                      <div className="w-full flex flex-row gap-5">
                        <div className="w-[80%]">
                          <div className="text-darkPrimary text-[5vw] lg:text-[3vw] font-semibold leading-none font-oswald">
                            <h3>Business Consultancy</h3>
                          </div>
                        </div>
                        <div className="w-[20%]">
                          <div className="w-full aspect-square flex justify-center items-center bg-red-400"></div>
                        </div>
                      </div>
                      <p className="font-light leading-tight text-base lg:text-lg text-darkSecondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi a esse, nostrum sint eos beatae eum, nam odio
                        eveniet expedita, sed deleniti nobis accusantium
                        delectus ex.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
