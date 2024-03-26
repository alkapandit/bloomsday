import React from "react";

function Footer() {
  return (
    <div class="font-neueMontreal">

      <div class="bg-yellowish flex items-center justify-center">
        <div class="w-3/4  py-10 flex justify-between px-5">
          <div class="w-full">
            <div>
              <img src="/assets/FooterBloomsdayLogo.svg" alt="FooterBloomsdayLogo"/>
            </div>
            <div class=" ">
              <h3 class="font-neueMontreal font-medium text-4xl text-primaryGreen py-5">
                Apply For the Waitlist
              </h3>
              <p class="w-[58%]">
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
              <input type="text" class="w-[28rem] p-2 rounded-md mt-1" />
            </div>
            <div class="text-sm text-primaryGreen font-medium my-5">
              <span>Email Address*</span>
              <input type="text" class="w-[28rem] p-2 rounded-md mt-1" />
            </div>
            <div class="text-sm text-primaryGreen font-medium my-5">
              <span>Customer Type*</span>
              <select class="w-[28rem] py-2 px-5 rounded-md border-0 outline-none text-primaryGreen">
                <option class="bg-mintGreen">I am a Homebuyer</option>
                <option class="bg-mintGreen">I am an Agent</option>
              </select>
            </div>
            <p class="font-neueMontreal font-normal text-[0.7rem] flex justify-end">
              <span>* Indicates a required field</span>
            </p>
            <button class="bg-primaryGreen rounded-md text-white font-medium py-2 px-8 mt-5">
              Submit
            </button>
            
          </div>
        </div>
      </div>
      <div class="py-20 bg-primaryGreen">
      <div class=" flex justify-center ">
        <div class="w-[80%] text-white  ">
          <div class="text-white flex items-center justify-between   border-b-2 border-yellowish pb-14">
            <div class="flex w-2/4">
              <img src="/assets/FooterBloomsdayLogo.svg" class="w-[2rem]" alt="FooterBloomsdayLogo" />
              <img src="/assets/FooterBloomsdayTextLolo.svg" class="mx-2" alt="FooterBloomsdayTextLolo" />
            </div>
            <div class="text-sm w-2/4 flex items-center justify-end text-yellowish font-medium ">
              <span class="me-20 underline">Contect Us</span>
              <span class="">Headquartered in Denver, CO</span>
            </div>
          </div>
        </div>
      </div>
      <div class=" text-white  flex justify-center ">
        <div class="w-[80%] flex justify-between items-center border-b-2 border-yellowish py-5">
          <div class=" text-yellowish">
          <h4 class="font-medium text-2xl my-2">Get the Latest from Bloomsday</h4>
            <p class="">Stay in the loop on Bloomsday Homes latest news and updates.</p>
          </div>
          <div class=" text-yellowish">
           
            <div class="my-4">
              <input type="email" placeholder="Email Address" class="w-96 rounded-md py-2 px-4 me-3 placeholder:text-sm placeholder:text-[#1C4835]" />
              <button class="bg-yellowish text-primaryGreen py-2 px-5 rounded-md">Subscribe</button>
            </div>
            <p class="text-[0.6rem]">
              By submitting this form, you agree to Bloomsday <span class="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <div class=" flex justify-center pt-14">
        <div class="w-[80%] text-yellowish flex justify-between ">
         <div class=" w-2/4">
          <div class="pb-4">
            <span class="me-8 underline ">Privacy</span>
            <span class="underline">Terms</span>
          </div>
          <p class="font-normal text-xs font-neueMontrea">
            Bloomsday Home's website and platform offer the services of
            education and organization. Bloomsday Home is not a real estate firm
            or law firm and neither gives nor intends to give counsel in any
            form whatsoever.
          </p>
         </div>
         <div >
          <span class=" text-xs"> &#169; 2024 Bloomsday Home, Inc</span>
          <span class="ms-8 text-xs">All rights reserved.</span>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
