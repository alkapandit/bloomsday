import React, { useState } from "react";
import WaitlistPopup from "./WaitlistPopup";

function JoinWaitlist() {
  const [waitlist, setWaitlist] = useState(false);

  return (
    <div class="font-neueMontreal" id="joinWaitlist">
      <div class="bg-yellowish flex items-center justify-center">
        <div class="w-3/4  py-10 flex justify-between ">
          <div class="w-full">
            <div>
              <img
                src="/assets/FooterBloomsdayLogo.svg"
                alt="FooterBloomsdayLogo"
              />
            </div>
            <div class=" ">
              <h3 class="font-neueMontreal font-medium text-4xl text-primaryGreen py-5">
                Apply For the Waitlist
              </h3>
              <p class="w-[58%] tracking-wide">
                We're currently inviting a select group of homebuyers and agents
                to test our innovative platform. By entering your email, you'll
                secure your spot on our waitlist and be among the first to
                experience the future of seamless homebuying. Don't miss this
                opportunity to shape the evolution of Bloomsday!
              </p>
            </div>
          </div>
          <form class="">
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="full_name">Full Name*</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                class="w-[28rem] p-2 rounded-md mt-1"
              />
            </div>
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="email">Email Address*</label>
              <input
                type="text"
                id="email"
                name="email"
                class="w-[28rem] p-2 rounded-md mt-1"
              />
            </div>
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="customer_type">Customer Type*</label>
              <select
                id="customer_type"
                name="customer_type"
                class="w-[28rem] py-2 px-5 rounded-md border-0 outline-none text-[#476A57]"
              >
                <option class="bg-mintGreen">I am a Homebuyer</option>
                <option class="bg-mintGreen">I am an Agent</option>
              </select>
            </div>
            <p class="font-neueMontreal font-normal text-[0.7rem] flex justify-end">
              <span>* Indicates a required field</span>
            </p>
            <button
              type="submit"
              class="bg-primaryGreen rounded-md text-white font-medium py-2 px-8 mt-5"
              onClick={(e) => {
                e.preventDefault();
                setWaitlist(true);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {waitlist && <WaitlistPopup setWaitlist={setWaitlist} />}
    </div>
  );
}

export default JoinWaitlist;
