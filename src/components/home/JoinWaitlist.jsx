import React, { useState } from "react";
import WaitlistPopup from "./WaitlistPopup";

function JoinWaitlist() {
  const [waitlist, setWaitlist] = useState(false);

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
        setWaitlist(true);
        myForm.reset();
      })
      .catch((error) => alert(error));
  };

  return (
    <div class="font-neueMontreal" id="joinWaitlist">
      <div class="bg-yellowish flex items-center justify-center">
        <div class="w-3/4 sm:w-full  py-24 sm:py-12 sm:px-8 flex  sm:flex-col justify-between sm:justify-center ">
          <div class="w-full">
            {/* <div>
              <img
                src="/assets/FooterBloomsdayLogo.svg"
                alt="FooterBloomsdayLogo"
              />
            </div> */}
            <div class="font-neueMontreal  ">
              <span class="text-lg font-breeSerif font-medium hidden sm:block">Join the Community</span>
              <h3 class="font-normal text-[2.6rem] sm:text-4xl text-primaryGreen py-5 sm:py-3">
                Apply For the Waitlist
              </h3>
              <p class="w-[58%] sm:w-full sm:pt-2 sm:pb-7 tracking-wide">
                We're currently inviting a select group of homebuyers and agents
                to test our innovative platform. By entering your email, you'll
                secure your spot on our waitlist and be among the first to
                experience the future of seamless homebuying. Don't miss this
                opportunity to shape the evolution of Bloomsday!
              </p>
            </div>
          </div>
          <form
            class=""
            data-netlify="true"
            name="joinWaitlist"
            method="post"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="joinWaitlist" />
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="full_name">Full Name*</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                class="w-[28rem] sm:w-full p-2 rounded-md mt-1"
              />
            </div>
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="email">Email Address*</label>
              <input
                type="text"
                id="email"
                name="email"
                class="w-[28rem]  sm:w-full p-2 rounded-md mt-1"
              />
            </div>
            <div class="text-sm text-[#476A57] font-medium my-5">
              <label for="customer_type">Customer Type*</label>
              <select
                id="customer_type"
                name="customer_type"
                class="w-[28rem] sm:w-full py-2 px-5 sm:px-2 rounded-md border-0 outline-none text-[#476A57]"
              >
                <option class="bg-mintGreen">Select</option>
                <option class="bg-mintGreen">I am a Homebuyer</option>
                <option class="bg-mintGreen">I am an Agent</option>
              </select>
            </div>
            <p class="font-neueMontreal font-normal text-[0.7rem] flex justify-end">
              <span>* Indicates a required field</span>
            </p>
            <button
              type="submit"
              class="bg-primaryGreen rounded-md text-yellowish  font-medium py-2 px-8 mt-5 sm:mt-0 font-neueMontreal tracking-wide"
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
