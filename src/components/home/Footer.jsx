import React from "react";

function Footer() {
  return (
    <div class="mt-20">
      <div class="bg-lightGreen flex items-center justify-center">
        <div class="w-[60%]  py-10 flex justify-between">
          <div class="w-full">
            <div>
              <img src="/assets/FooterBloomsdayLogo.svg" />
            </div>
            <div class="mt-7 ">
              <span class="font-breeSerif font-medium text-primaryGreen">
                Join Our Community!
              </span>
              <h3 class="font-neueMontreal font-medium text-4xl text-primaryGreen py-5">
                Apply For the Waitlist
              </h3>
              <p class="w-3/4">
                We're currently inviting a select group of homebuyers and agents
                to test our innovative platform. By entering your email, you'll
                secure your spot on our waitlist and be among the first to
                experience the future of seamless homebuying. Don't miss this
                opportunity to shape the evolution of Bloomsday!
              </p>
            </div>
          </div>
          <div class="">
            <div class="text-sm text-primaryGreen font-medium my-5">
              <span>Full Name*</span>
              <input type="text" class="w-96 p-2 rounded-md mt-1" />
            </div>
            <div class="text-sm text-primaryGreen font-medium my-5">
              <span>Email Address*</span>
              <input type="text" class="w-96 p-2 rounded-md mt-1" />
            </div>
            <div class="text-sm text-primaryGreen font-medium my-5">
              <span>Customer Type*</span>
              <select class="w-96 py-2 px-5 rounded-md">
                <option></option>
              </select>
            </div>
            <button class="bg-primaryGreen rounded-md text-white font-medium py-2 px-8 mt-5">
              Submit
            </button>
            <p class="font-neueMontreal font-normal text-xs mt-5">
              * Indicates a required field
            </p>
          </div>
        </div>
      </div>
      <div class="bg-primaryGreen text-white py-14  flex justify-center">
        <div class="w-[80%] flex justify-between items-center">
          <div class=" text-yellowish">
            <h4 class="font-semibold">Contact US</h4> <p class="my-2 text-sm ">dolly@bloomsdayhome.com</p>
            <p  class="text-sm ">201 Milwaukee Street, Suite 200 <br/>Denver, CO 80206</p>
          </div>
          <div class=" text-yellowish">
            <h4 class="font-medium text-3xl">Get the Latest from Bloomsday</h4>
            <p>Stay in the loop on Bloomsday Homes latest news and updates.</p>
            <div class="my-4">
              <input type="email" placeholder="Email Address" class="w-96 rounded-md py-2 px-4 me-3" />
              <button class="bg-yellowish text-primaryGreen py-2 px-5 rounded-md">Subscribe</button>
            </div>
            <p class="text-[0.6rem]">
              By submitting this form, you agree to Bloomsday <span class="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <div class="bg-primaryGreen flex justify-center">
        <div class="w-[80%] text-white py-10  ">
          <div class="text-white py-4 flex items-center justify-between   border-b-2 border-yellowish">
            <div class="flex">
              <img src="/assets/FooterBloomsdayLogo.svg" class="w-[2rem]" />
              <img src="/assets/FooterBloomsdayTextLolo.svg" class="mx-2" />
            </div>
            <div class="text-sm text-yellowish">
              <span class="mx-3">Privacy</span>
              <span class="mx-3">Terms</span>
              <span class="mx-3"> 2024 Bloomsday Home, Inc</span>
              <span class="mx-3">All rights reserved.</span>
            </div>
          </div>
          <div class="flex items-end justify-end w-full py-5">
          <p class="font-normal text-end text-xs text-yellowish w-2/4">
            Bloomsday Home’s website and platform offer the services of
            education and organization. Bloomsday Home is not a real estate firm
            or law firm and neither gives nor intends to give counsel in any
            form whatsoever.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
