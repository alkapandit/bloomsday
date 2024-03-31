import React from "react";

function WaitlistPopup({ setWaitlist }) {
  return (
    <div class="w-full bg-[#121619BF] top-0 fixed h-[100vh] flex items-center justify-center">
      <div class="bg-yellowish w-[40%] sm:w-[80%] p-10 rounded-md ">
        <div class="flex flex-col justify-center font-neueMontreal my-10 sm:my-5">
          <img
            src="/assets/BloomsdayLogo.svg"
            alt=""
            class="w-[5rem] m-auto mb-10"
          />
          <h2 class="text-center text-3xl sm:text-2xl sm:font-medium text-primaryGreen pb-8">
            Thank You for Joining&nbsp;
            <br class="sm:hidden"/>
            the Bloomsday Community
          </h2>
          <p class="text-center text-sm tracking-wide pb-10">
            Your request to join the Bloomsday waitlist has been received.
            <br />
            We will be in touch with you on next steps.
          </p>
          <div class="flex items-center justify-center">
            <button
              class="bg-primaryGreen text-yellowish font-medium py-2 px-4 rounded-md"
              onClick={() => {
                setWaitlist(false);
              }}
            >
             Return to Home Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistPopup;
