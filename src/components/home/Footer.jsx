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
        <div class="py-20 bg-primaryGreen">
          <div class=" flex justify-center ">
            <div class="w-[88%] text-white  ">
              <div class="text-white flex items-center justify-between   border-b-2 border-yellowish pb-14">
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
                <div class="text-sm w-2/4 flex items-center justify-end text-yellowish font-medium ">
                  <span class="me-20 underline font-neueMontreal tracking-wide font-semibold text-[0.813rem]">
                    {" "}
                    <a href="mailto:dolly@bloomsdayhome.com?subject=General Enquiry">
                      Contect Us Via Email
                    </a>
                  </span>
                  <span class="">Headquartered in Denver, CO</span>
                </div>
              </div>
            </div>
          </div>
          <div class=" text-white flex justify-center ">
            <div class="w-[88%] flex justify-between items-center border-b-2 border-yellowish py-5">
              <div class=" text-yellowish">
                <h4 class="font-medium text-2xl my-2">
                  Get the Latest from Bloomsday
                </h4>
                <p>
                  Stay in the loop on Bloomsday Homes latest news and updates.
                </p>
              </div>
              <div class=" text-yellowish">
                <div class="my-4">
                  <form
                    data-netlify="true"
                    name="subscribeForm"
                    method="post"
                    onSubmit={handleSubmit}
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
                      class="w-96 rounded-md py-2 px-4 me-3 placeholder:text-sm placeholder:text-[#1C4835] outline-none text-black"
                    />
                    <button
                      type="submit"
                      class="bg-yellowish text-primaryGreen py-2 px-5 rounded-md"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
                <p class="text-[0.6rem]">
                  By submitting this form, you agree to Bloomsday{" "}
                  <span class="underline">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
          <div class=" flex justify-center pt-14">
            <div class="w-[88%] text-yellowish flex justify-between ">
              <div class=" w-2/4">
                <div class="pb-4">
                  <span class="me-8 underline ">
                    <a href="/privacy">Privacy</a>
                  </span>
                  <span class="underline">
                    <a href="/terms">Terms</a>
                  </span>
                </div>
                <p class="font-normal text-xs font-neueMontrea pe-[5.4rem] tracking-wide">
                  Bloomsday Home’s website and platform offer the services of
                  education and organization. Bloomsday Home is not a real
                  estate firm or law firm and neither gives nor intends to give
                  counsel in any form whatsoever.
                </p>
              </div>
              <div>
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
