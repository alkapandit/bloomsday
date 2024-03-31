import React, { useState } from "react";
import "./style.css";

function BloomsdayArtAndScience() {
  const [data, setData] = useState(1);
  return (
    <div class="flex items-center justify-center mt-14 sm:mt-5 ps-5">
      <div class="w-[80%] sm:w-full sm:px-5">
        <div class="text-center">
          <p class="py-5 text-sm font-medium font-breeSerif sm:text-lg">
            Embrace Organizational Bliss
          </p>
          <h3 class="font-normal font-neueMontreal text-primaryGreen text-5xl">
            Master the Art and Science of Homebuying
          </h3>
        </div>
        <div class="flex items-center justify-between mt-8">
          <div class="w-1/2 sm:w-full font-neueMontreal">
            <div>
              {data !== 1 && (
                <div
                  class="flex items-center justify-between cursor-pointer p-5 my-4 rounded-md  myshadow font-semibold text-primaryGreen tracking-[1px]"
                  onClick={() => {
                    setData(1);
                  }}
                >
                  <span class="text-xl">First Steps</span>{" "}
                  <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                </div>
              )}
              {data === 1 && (
                <div class="rounded-md myshadow py-5 px-5 sm:px-5 ">
                  <div>
                    <div class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen tracking-[1px]">
                      <span class="text-xl">First Steps</span>{" "}
                      <img
                        src="/assets/CloseArrowIcon.svg"
                        alt="CloseArrowIcon"
                      />
                    </div>
                    <div class="pe-10 sm:pe-0 py-3 tracking-[0.5px]">
                      <img
                        class="w-full pb-10 hidden sm:block "
                        src="/assets/First-Steps-Image.png"
                        alt="First-Steps-Image"
                      />
                      <p>
                        Bloomsday Home transforms the dream of homeownership
                        into a serene reality by providing clarity, education,
                        and organization before you embark on your home journey.
                        Understanding the process dispels stress, enabling you
                        to approach your experience with a focused mindset.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div class="">
              {data !== 2 && (
                <div
                  class="flex items-center justify-between cursor-pointer p-5 my-4 myshadow rounded-md font-semibold text-primaryGreen tracking-[1px]"
                  onClick={() => {
                    setData(2);
                  }}
                >
                  <span class="text-xl">Along The Path</span>{" "}
                  <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                </div>
              )}
              {data === 2 && (
                <div class="rounded-md myshadow py-5 px-5">
                  <div>
                    <div class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen tracking-[1px]">
                      <span class="text-xl">Along The Path</span>{" "}
                      <img
                        src="/assets/CloseArrowIcon.svg"
                        alt="CloseArrowIcon"
                      />
                    </div>
                    <div class="pe-10 sm:pe-0 py-4 tracking-[0.5px]">
                      <img
                        class="w-full pb-10 hidden sm:block "
                        src="/assets/Along-the-Path-Image.png"
                        alt="First-Steps-Image"
                      />
                      Bloomsday Home is here to help you avoid unexpected
                      hurdles by offering a 5-step home-buying checklist and
                      effortless document management to keep you organized and
                      on top of all the essential paperwork, ensuring a smooth
                      homebuying experience.
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div class="">
              {data !== 3 && (
                <div
                  class="flex items-center justify-between cursor-pointer p-5 my-4 myshadow rounded-md font-semibold text-primaryGreen tracking-[1px]"
                  onClick={() => {
                    setData(3);
                  }}
                >
                  <span class="text-xl">Setting In</span>{" "}
                  <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                </div>
              )}
              {data === 3 && (
                <div class="rounded-md myshadow py-5 px-5">
                  <div>
                    <div class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen tracking-[1px]">
                      <span class="text-xl">Setting In</span>{" "}
                      <img
                        src="/assets/CloseArrowIcon.svg"
                        alt="CloseArrowIcon"
                      />
                    </div>
                    <div class="pe-5 sm:pe-0 py-4 tracking-[0.5px]">
                      <img
                        class="w-full pb-10 hidden sm:block "
                        src="/assets/Settling-In-Image.png"
                        alt="First-Steps-Image"
                      />
                      Bloomsday Home's commitment extends beyond your move-in
                      date. Our secure document management system create a
                      personalized hub for managing your home's on-going records
                      and essential documents keeping your home management in
                      one secure place.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div class="w-1/2 p-5 flex justify-center sm:hidden">
            {data === 1 && (
              <img
                class="w-[90%] pb-4"
                src="/assets/First-Steps-Image.png"
                alt="First-Steps-Image"
              />
            )}
            {data === 2 && (
              <img
                class="w-[90%]"
                src="/assets/Along-the-Path-Image.png"
                alt="Along-the-Path-Image"
              />
            )}
            {data === 3 && (
              <img
                class="w-[90%] pt-5"
                src="/assets/Settling-In-Image.png"
                alt="Settling-In-Image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloomsdayArtAndScience;
