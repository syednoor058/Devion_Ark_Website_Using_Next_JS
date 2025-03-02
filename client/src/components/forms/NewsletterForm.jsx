"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaBell } from "react-icons/fa";
import CustomShapeButton from "../buttons/CustomShapeButton";

function NewsletterForm() {
  const form = useRef(null);
  const [email, setEmail] = useState("");

  const registerNewsletter = (e) => {
    console.log("Func start");
    e.preventDefault();

    console.log("After preventdefault");

    emailjs
      .sendForm(
        "service_37frwmg",
        "template_uzavnvf",
        form.current,
        "PkHs3ocPhavTsShFB"
      )
      .then(
        () => {
          console.log("Success");
          setEmail("");
        },
        (error) => {
          console.log("Something went wrong!");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      className="w-full flex flex-col gap-3"
      onSubmit={registerNewsletter}
    >
      <input
        className="p-3 outline-none border bg-transparent text-lightSecondary"
        placeholder="Enter your email address"
        type="email"
        name="news_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" className="flex justify-start">
        <CustomShapeButton
          label="Subscribe"
          backgroundColor="bg-lightPrimary"
          hoverBgColor="bg-accentColor"
          textStyle="text-lg font-normal text-darkPrimary"
          hoverText="text-darkPrimary"
          paddingX="ps-4 pe-8"
          paddingY="py-4"
          fontGap="gap-2"
          icon={
            <FaBell className="text-base text-darkPrimary transition duration-[350ms]" />
          }
        />
      </button>
    </form>
  );
}

export default NewsletterForm;
