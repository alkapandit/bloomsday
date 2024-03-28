import React from "react";

function WaitlistPopup({ setWaitlist }) {
  return (
    <div class="w-full bg-[#121619BF] top-0 fixed h-[100vh] flex items-center justify-center">
      <div class="bg-yellowish w-[40%] p-10 rounded-md ">
        <div class="flex flex-col justify-center font-neueMontreal my-10">
          <img
            src="/assets/BloomsdayLogo.svg"
            alt=""
            class="w-[5rem] m-auto mb-10"
          />
          <h2 class="text-center text-3xl text-primaryGreen pb-8">
            Thank You for Joining <br />
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
              <a href="#hero">Return to Home Page</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitlistPopup;
