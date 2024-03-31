import React, { useState } from "react";
import SubscribePopup from "./SubscribePopup";

function Footer() {
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubscribe(true);
        myForm.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div class="font-neueMontreal" id="joinWaitlist">
        <div class="py-20 sm:py-14 sm:px-5 bg-primaryGreen">
          <div class=" flex justify-center ">
            <div class="w-[88%] sm:w-full text-yellowish  ">
              <div class="text-yellowish flex items-center justify-between   border-b-2 border-yellowish pb-14 sm:pb-5">
                <div class="flex w-2/4">
                  <img
                    src="/assets/FooterBloomsdayLogo.svg"
                    class="w-[2rem]"
                    alt="FooterBloomsdayLogo"
                  />
                  <img
                    src="/assets/FooterBloomsdayTextLolo.svg"
                    class="mx-2"
                    alt="FooterBloomsdayTextLolo"
                  />
                </div>
                <div class="text-sm w-2/4 flex items-center justify-end text-yellowish font-medium sm:hidden">
                  <span class="me-20 underline font-neueMontreal tracking-[0.5px] font-semibold text-[0.813rem]">
                    {" "}
                    <a href="mailto:dolly@bloomsdayhome.com?subject=General Enquiry">
                      Contact Us Via Email
                    </a>
                  </span>
                  <span class="font-neueMontreal tracking-[0.5px] font-semibold text-[0.813rem]">
                    Headquartered in Denver, CO
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class=" text-white flex justify-center ">
            <div class="w-[88%] sm:w-full flex sm:flex-col justify-between items-center border-b-2 border-yellowish py-5">
              <div class="sm:w-full text-yellowish">
                <h4 class="font-medium text-2xl my-2">
                  Get the Latest from Bloomsday
                </h4>
                <p>
                  Stay in the loop on Bloomsday Homes latest news and updates.
                </p>
              </div>
              <div class="sm:w-full text-yellowish">
                <div class="my-4 sm:my-0 sm:mt-3">
                  <form
                    data-netlify="true"
                    name="subscribeForm"
                    method="post"
                    onSubmit={handleSubmit}
                    class="sm:flex"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="subscribeForm"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      class="w-96 sm:w-72 rounded-md py-2 px-4 me-3 placeholder:text-sm placeholder:text-[#1C4835] outline-none text-black"
                    />
                    <button
                      type="submit"
                      class="bg-yellowish text-primaryGreen py-2 px-5 rounded-md"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <p class="text-[0.6rem] block sm:hidden">
                  By submitting this form, you agree to Bloomsday{" "}
                  <a href="/privacy" class="underline"> Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
          <div class=" flex justify-center pt-14 sm:pt-6">
            <div class="w-[88%] sm:w-full text-yellowish flex sm:flex-col  justify-between sm:justify-start ">
              <div class="text-sm w-full flex-col justify-start text-yellowish font-medium hidden sm:block">
                <p class="w-full underline font-neueMontreal tracking-[0.5px] font-semibold text-[0.813rem] pb-4">
                  {" "}
                  <a href="mailto:dolly@bloomsdayhome.com?subject=General Enquiry">
                    Contact Us Via Email
                  </a>
                </p>
                <p class="w-full font-neueMontreal tracking-[0.5px] font-semibold text-[0.813rem]">
                  Headquartered in Denver, CO
                </p>
              </div>
              <div class=" w-2/4 sm:w-full sm:pt-10">
                <div class="pb-4">
                  <span class="me-8 underline font-neueMontreal tracking-[0.5px] text-[0.813rem] ">
                    <a href="/privacy">Privacy</a>
                  </span>
                  <span class="underline font-neueMontreal tracking-[0.5px] text-[0.813rem]">
                    <a href="/terms">Terms</a>
                  </span>
                </div>
                <p class="font-normal text-xs font-neueMontrea pe-[5.4rem] sm:pe-0 tracking-wide">
                  Bloomsday Home’s website and platform offer the services of
                  education and organization. Bloomsday Home is not a real
                  estate firm or law firm and neither gives nor intends to give
                  counsel in any form whatsoever.
                </p>
              </div>
              <div class="sm:pt-5">
                <span class=" text-xs"> &#169; 2024 Bloomsday Home, Inc</span>
                <span class="ms-8 text-xs">All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {subscribe && <SubscribePopup setSubscribe={setSubscribe} />}
    </>
  );
}

export default Footer;
