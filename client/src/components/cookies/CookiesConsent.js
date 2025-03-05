// components/CookieConsent.js
"use client";

import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import TextAnimation from "../animations/TextAnimation";

const CookiesConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Check initial consent state
  useEffect(() => {
    if (!getCookie("cookiePreferences")) {
      setShowBanner(true);
    }
  }, []);

  // Handle consent choices
  const handleConsent = (consentType) => {
    setCookie("cookiePreferences", consentType, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
      secure: true,
      sameSite: "Lax",
    });

    // Initialize cookies based on preference
    if (consentType === "all") {
      setCookie("analyticsConsent", "granted", {
        maxAge: 365 * 24 * 60 * 60,
        path: "/",
      });
    }

    setShowBanner(false);
    window.location.reload(); // Refresh to apply settings
  };

  if (!showBanner) return null;

  return (
    <div className="w-full lg:w-[40%] fixed left-0 bottom-0 lg:left-5 lg:bottom-5 bg-lightPrimary text-darkPrimary py-5 z-50 rounded-md font-poppins">
      <div className="px-4 lg:px-5">
        <h3 className="text-2xl lg:text-3xl font-bold mb-5 font-oswald">Cookie Preferences</h3>

        {!showSettings ? (
          <div className="w-full flex flex-col gap-4">
            <p className="text-sm lg:text-base font-light leading-tight">
              We use cookies to ensure basic functionality and improve your
              experience. This website uses essential cookies to ensure its
              proper operation and tracking cookies to understand how you
              interact with it.
            </p>

            <div className="w-full flex flex-col lg:flex-row justify-between gap-3">
              <div className="flex flex-row gap-5">
              <button onClick={() => handleConsent("all")}>
                <div
                  className={`inline-block ps-3 pe-5 py-3 text-base font-normal text-lightPrimary bg-darkPrimary duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
                  style={{
                    clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                  }}
                >
                  <div
                    className={`relative z-[5] flex flex-row-reverse gap-2 items-center whitespace-nowrap`}
                  >
                    <span>
                      <TextAnimation text="Accept All" />
                    </span>
                  </div>
                </div>
              </button>
              <button onClick={() => handleConsent("necessary")}>
                <div
                  className={`inline-block p-[1px] text-base font-normal text-darkPrimary bg-darkPrimary duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
                  style={{
                    clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                  }}
                >
                  <div
                    className={`ps-[11px] pe-[19px] py-[11px] relative z-[5] flex flex-row-reverse gap-2 items-center whitespace-nowrap bg-lightPrimary`}
                    style={{
                      clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                    }}
                  >
                    <span>
                      <TextAnimation text="Necessaries Only" />
                    </span>
                  </div>
                </div>
              </button>
              </div>
              <div className="flex"><button
                onClick={() => setShowSettings(true)}
                className=" text-darkPrimary hover:text-black"
              >
                Advanced Settings
              </button></div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Necessary Cookies</h4>
                <p className="text-sm text-gray-600">
                  Required for basic site functionality
                </p>
              </div>
              <span className="text-gray-400">Always Active</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Analytics Cookies</h4>
                <p className="text-sm text-gray-600">
                  Help us improve our services
                </p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  defaultChecked
                  onChange={(e) => {
                    setCookie(
                      "analyticsConsent",
                      e.target.checked ? "granted" : "denied",
                      {
                        maxAge: 365 * 24 * 60 * 60,
                        path: "/",
                      }
                    );
                  }}
                />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="flex flex-row gap-7 mt-6">
              
              <button onClick={() => handleConsent("custom")}>
                <div
                  className={`inline-block ps-4 pe-5 py-3 text-base font-normal text-lightPrimary bg-darkPrimary duration-[350ms] ease-in-out transition-colors group overflow-hidden relative`}
                  style={{
                    clipPath: `polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, calc(100% - 16px) 100%, 16px 100%, 0px 100%, 0px 0px)`,
                  }}
                >
                  <div
                    className={`relative z-[5] flex flex-row-reverse gap-2 items-center whitespace-nowrap`}
                  >
                    <span>
                      <TextAnimation text="Save Preferences" />
                    </span>
                  </div>
                </div>
              </button>
              <button onClick={() => setShowSettings(false)} className="text-base">
               
                      <TextAnimation text="Back" />
                    
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 text-sm">
          <Link
            href="/legals#cookie-policy"
            className="text-darkPrimary underline underline-offset-4"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
