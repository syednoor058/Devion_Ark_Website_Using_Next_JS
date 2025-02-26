"use client";

import emailjs from "@emailjs/browser";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import correctAnimation from "../../../public/lottie/correct_lottie.json";
import wrongAnimation from "../../../public/lottie/cross_lottie.json";
import LottieAnimation from "../animations/LottieAnimation";
import TextAnimation from "../animations/TextAnimation";
import CustomShapeBorderButton from "../buttons/CustomShapeBorderButton";

function ContactForm() {
  const form = useRef();
  const [msgModal, setMsgModal] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [interest, setInterest] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const interestList = [
    { value: "Custom Software Solution", label: "Custom Software Solution" },
    { value: "Website Development", label: "Website Development" },
    { value: "Social Media Marketing", label: "Social Media Marketing" },
    { value: "Search Engine Marketing", label: "Search Engine Marketing" },
    {
      value: "Search Engine Optimization",
      label: "Search Engine Optimization",
    },
    { value: "Business Consultancy", label: "Business Consultancy" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x80iyui",
        "template_0anixci",
        form.current,
        "PkHs3ocPhavTsShFB"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMsgModal("correct");
          // Reset form after successful submission
          setName("");
          setCompany("");
          setInterest("");
          setEmail("");
          setPhone("");
          setDesc("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMsgModal("wrong");
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 text-lg"
    >
      {msgModal === "correct" && (
        <div className="w-full h-screen fixed inset-0 px-4 lg:px-20 bg-black bg-opacity-50 backdrop-blur-[2px] z-[10000]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full lg:w-[50%] overflow-hidden rounded">
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-60 flex justify-center items-center bg-darkPrimary p-5">
                  <div className="h-full flex justify-center">
                    <LottieAnimation animationFile={correctAnimation} />
                  </div>
                </div>
                <div className="w-full p-10 bg-lightPrimary">
                  <div className="w-full h-full flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                      <p className="text-darkPrimary font-semibold text-5xl text-center">
                        Great!
                      </p>
                      <p className="text-darkSecondary font-light text-base lg:text-lg text-center leading-none">
                        Your message has been sent successfully! Our support
                        team will get back to you shortly.
                      </p>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="flex">
                        <button
                          onClick={() => setMsgModal("")}
                          className="ps-3 pe-5 py-2 flex flex-row justify-center items-center leading-none text-lg font-normal bg-red-500 text-lightPrimary rounded-full gap-1"
                        >
                          <IoMdClose />
                          <span>Close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {msgModal === "wrong" && (
        <div className="w-full h-screen fixed inset-0 px-4 lg:px-20 bg-black bg-opacity-50 backdrop-blur-[2px] z-[10000]">
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-full lg:w-[50%] overflow-hidden rounded">
              <div className="w-full h-full flex flex-col">
                <div className="w-full h-60 flex justify-center items-center bg-darkPrimary p-5">
                  <div className="h-full flex justify-center">
                    <div className="flex scale-[.5] justify-center">
                      <LottieAnimation animationFile={wrongAnimation} />
                    </div>
                  </div>
                </div>
                <div className="w-full p-10 bg-lightPrimary">
                  <div className="w-full h-full flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-2">
                      <p className="text-darkPrimary font-semibold text-5xl text-center">
                        Ooops!
                      </p>
                      <p className="text-darkSecondary font-light text-base lg:text-lg text-center leading-none">
                        Something went wrong! Sorry for the inconvinience!
                        Please try again after sometimes.
                      </p>
                    </div>
                    <div className="w-full flex justify-center">
                      <div className="flex">
                        <button
                          onClick={() => setMsgModal("")}
                          className="ps-3 pe-5 py-2 flex flex-row justify-center items-center leading-none text-lg font-normal bg-red-500 text-lightPrimary rounded-full gap-1"
                        >
                          <IoMdClose />
                          <span>Close</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label>Name *</label>
        <input
          className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded px-4 py-4"
          required
          type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <label>Company</label>
        <input
          className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded px-4 py-4"
          type="text"
          name="from_company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 text-lightSecondary">
        <label>Interest *</label>
        <FormControl fullWidth>
          <Select
            // labelId="interest-select"
            id="interest-select-simple"
            required
            displayEmpty
            name="from_interest"
            value={interest}
            renderValue={() => {
              if (interest === "") {
                return <em>Select a service</em>;
              }

              return interest;
            }}
            // label="Interest in *"
            onChange={(e) => setInterest(e.target.value)}
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              color: "#999999",
              borderRadius: "4px",
              "& .MuiSvgIcon-root": {
                color: "#999999",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(153 153 153 / 0.3)",
                borderWidth: "1px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(153 153 153 / 0.3)",
                borderWidth: "1px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(153 153 153 / 0.3)",
                borderWidth: "1px",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#1b1b1b",
                  "& .MuiMenuItem-root": {
                    color: "#999999",
                    "&:hover": {
                      bgcolor: "#000000",
                    },
                  },
                },
              },
            }}
          >
            <MenuItem disabled value="">
              <em>Select a service</em>
            </MenuItem>
            {interestList.map((inter, i) => (
              <MenuItem key={i} value={inter.value} name="from_interest">
                {" "}
                {/* Added key prop */}
                {inter.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="flex flex-col gap-2">
        <label>Email *</label>
        <input
          className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded px-4 py-4"
          required
          type="email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Phone *</label>
        <input
          className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded px-4 py-4"
          required
          type="tel"
          name="from_phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label>Description</label>
        <textarea
          className="w-full h-full bg-transparent outline-none border border-lightSecondary/30 rounded px-4 py-4"
          type="text"
          name="from_desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          rows={4}
        />
      </div>
      <div className="flex flex-row gap-5 pt-1">
        <button type="submit">
          <div
            className={`inline-block ps-4 pe-8 py-4 text-lg font-normal text-darkPrimary bg-lightPrimary duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
            style={{
              clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
            }}
          >
            <div
              className={`relative z-[5] flex flex-row-reverse gap-2 items-center whitespace-nowrap`}
            >
              <span>
                <TextAnimation text="Submit" />
              </span>
              <span>
                <FiArrowDownLeft className="text-xl text-darkPrimary rotate-45 group-hover:rotate-90 transition duration-[350ms]" />
              </span>
            </div>
            <div
              className={`w-full h-full absolute left-0 top-0 -translate-x-full group-hover:translate-x-0 transition duration-[350ms] ease-in-out bg-accentColor z-[1]`}
            ></div>
          </div>
        </button>
        <CustomShapeBorderButton
          text="Home"
          forwardTo="/"
          bg="bg-lightPrimary"
          bg2="bg-darkPrimary"
          padd="ps-4 pe-8 py-[15px]"
          textColor="text-lightPrimary"
        />
      </div>
    </form>
  );
}

export default ContactForm;
