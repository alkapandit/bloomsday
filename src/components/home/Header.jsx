import React, { useState } from "react";

function Header() {
  const [navOptionsActive, setNavOptionsActive] = useState(false);
  const closeNav = () => {
    setNavOptionsActive(false);
  };
  return (
    <div class="sm:w-full bg-yellowish sticky  top-0 w-full z-30">
      <div class="border-b border-lightGreen px-20 sm:px-5">
        <div class="flex items-center py-4 justify-between">
          <a href="/" class="flex items-center cursor-pointer">
            <img src="/assets/BloomsdayLogo.svg" alt="Bloomsday Logo" />
            <img
              src="/assets/BloomsdayTextIcon.svg"
              alt="Bloomsday Text"
              class="mx-2"
            />
          </a>
          <div class="flex items-center sm:hidden">
            <ul class="flex items-center justify-between text-primaryGreen font-medium font-neueMontreal">
              <li class="mx-5 cursor-pointer">
                <a href="/#solutions">Solution</a>
              </li>
              <li class="mx-5 cursor-pointer">
                <a href="/#buyers">Homebuyers</a>
              </li>
              <li class="mx-5 cursor-pointer">
                <a href="/#joinCommunity">Agents</a>
              </li>
            </ul>
            <button class="py-2 px-5 bg-primaryGreen text-yellowish font-neueMontreal tracking-wide font-medium rounded-md mx-4">
              <a href="/#joinWaitlist">Join the Waitlist</a>
            </button>
          </div>
          <div
            class="cursor-pointer hidden sm:block"
            onClick={() => {
              setNavOptionsActive(true);
            }}
          >
            <img src="/assets/HamburgerIcon.svg" class="w-8" alt="Menu" />
          </div>
        </div>
      </div>
      {navOptionsActive && (
        <div class="fixed top-0 left-0 bg-yellowish w-full h-screen flex flex-col justify-between z-10">
          <div>
            <div class="border-b border-lightGreen py-4 ">
              <div class="flex items-center justify-between px-5">
                <a href="/" class="flex items-center cursor-pointer">
                  <img src="/assets/BloomsdayLogo.svg" alt="Bloomsday Logo" />
                  <img
                    src="/assets/BloomsdayTextIcon.svg"
                    alt="Bloomsday Text"
                    class="mx-2"
                  />
                </a>
                <div class="cursor-pointer" onClick={closeNav}>
                  <img src="/assets/CloseIcon.svg" class="w-8" />
                </div>
              </div>
            </div>
            <div class="">
              <ul class=" text-primaryGreen font-neueMontreal py-12 px-8 text-3xl flex flex-col gap-6">
                <li class="cursor-pointer ">
                  <a href="/#solutions" onClick={closeNav}>
                    Solution
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a href="/#buyers" onClick={closeNav}>
                    Homebuyers
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a href="/#agent" onClick={closeNav}>
                    Agents
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="p-8 border-t border-lightGreen border-spacing-2">
            <div class="text-sm w-full flex-col justify-start text-[#476A57] font-medium ">
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
            <button class="w-full mt-12 mb-3 py-2 px-5 bg-primaryGreen text-yellowish font-neueMontreal tracking-wide font-medium rounded-md">
              <a href="/#joinWaitlist" onClick={closeNav}>
                Join the Waitlist
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
