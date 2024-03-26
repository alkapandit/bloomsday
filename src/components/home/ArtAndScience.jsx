import React, { useState } from "react";
import "./style.css"

function BloomsdayArtAndScience() {
  const [data, setData] = useState(0);
  return (
    <div>
      <div class="flex items-center justify-center mt-14">
        <div class="w-3/4">
          <div class="text-center">
            <p class="py-5 text-sm font-medium font-breeSerif">
              Embrace Organizational Bliss
            </p>
            <h3 class="font-normal font-neueMontreal text-primaryGreen text-5xl">
              Master the Art and Science of Homebuying
            </h3>
          </div>
          <div class="flex items-center">
            <div class="w-1/2 font-neueMontreal px-5">
              <div class="">
                {data !== 1 && (
                  <div
                    class="flex items-center justify-between cursor-pointer p-5 my-5 rounded-md  myshadow font-semibold text-primaryGreen"
                    onClick={() => {
                      setData(1);
                    }}
                  >
                    <span>First Steps</span>{" "}
                    <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                  </div>
                )}
                {data === 1 && (
                  <div class="rounded-md myshadow py-4 px-5">
                    <div>
                      <div
                        class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen"
                        onClick={() => {
                          setData(0);
                        }}
                      >
                        <span>First Steps</span>{" "}
                        <img src="/assets/CloseArrowIcon.svg"  alt="CloseArrowIcon"/>
                      </div>
                      <div class="">
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
                {data !== 2 && (
                  <div
                    class="flex items-center justify-between cursor-pointer p-5 my-5 myshadow rounded-md font-semibold text-primaryGreen"
                    onClick={() => {
                      setData(2);
                    }}
                  >
                    <span>Along The Path</span>{" "}
                    <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                  </div>
                )}
                {data === 2 && (
                  <div class="rounded-md myshadow py-4 px-5">
                    <div>
                      <div
                        class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen "
                        onClick={() => {
                          setData(0);
                        }}
                      >
                        <span>Along The Path</span>{" "}
                        <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                      </div>
                      <div>
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
                    class="flex items-center justify-between cursor-pointer p-5 my-5 myshadow rounded-md font-semibold text-primaryGreen"
                    onClick={() => {
                      setData(3);
                    }}
                  >
                    <span>Setting In</span>{" "}
                    <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                  </div>
                )}
                {data === 3 && (
                  <div class="rounded-md myshadow py-4 px-5">
                    <div>
                      <div
                        class="flex items-center justify-between cursor-pointer pb-3 font-semibold text-primaryGreen "
                        onClick={() => {
                          setData(0);
                        }}
                      >
                        <span>Setting In</span>{" "}
                        <img src="/assets/CloseArrowIcon.svg" alt="CloseArrowIcon" />
                      </div>
                      <div>
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
            </div>
            <div class="w-1/2 bg-primaryGreen m-7 text-primaryGreen">
              <div class="flex items-center justify-center flex-col p-5">
                <div class="flex w-full items-center justify-center">
                  <div class="bg-mintGreen w-[30%] m-4 p-5 rounded-md relative">
                    <span class="font-breeSerif text-[#456A58]">Step 1</span>
                    <p class="font-medium text-xl font-neueMontreal">
                      Get
                      <br />
                      Approved
                    </p>
                    <img
                      src="/assets/ArrowIcon.svg"
                      class="absolute -right-5 top-14"
                      alt="ArrowIcon" 
                    />
                  </div>
                  <div class="bg-mintGreen w-[30%] m-4 p-5 rounded-md relative">
                    <span class="font-breeSerif text-[#456A58]">Step 2</span>
                    <p class="font-medium text-xl font-neueMontreal">
                      Make an
                      <br />
                      Offer
                    </p>
                    <img
                      src="/assets/ArrowIcon.svg"
                      class="absolute -right-5 top-14"
                      alt="ArrowIcon" 
                    />
                  </div>
                  <div class="bg-mintGreen w-[30%] m-4 p-5 rounded-md">
                    <span class="font-breeSerif text-[#456A58]">Step 3</span>
                    <p class="font-medium text-xl font-neueMontreal">
                      Esrow
                      <br />
                      Funds
                    </p>
                  </div>
                </div>
                <div class="flex w-full items-center justify-center">
                  <div class="bg-mintGreen w-[30%] m-4 p-5 rounded-md relative">
                    <span class="font-breeSerif text-[#456A58]">Step 4</span>
                    <p class="font-medium text-xl font-neueMontreal">
                      Complete
                      <br />
                      Sate
                    </p>
                    <img
                      src="/assets/ArrowIcon.svg"
                      class="absolute -right-5 top-14"
                      alt="ArrowIcon"
                    />
                  </div>
                  <div class="bg-mintGreen w-[30%] m-4 p-5 rounded-md relative">
                    <span class="font-breeSerif text-[#456A58]">Step 5</span>
                    <p class="font-medium text-xl font-neueMontreal">
                      Moving <br />
                      In
                    </p>
                    <img
                      src="/assets/ArrowIcon.svg"
                      class="absolute -right-5 top-14"
                      alt="ArrowIcon"
                    />
                  </div>
                  <div class="bg-[#FAEFC6] w-[30%] m-4 p-5 rounded-md">
                    <p class="font-medium text-xl font-neueMontreal my-3">
                      Welcome
                      <br />
                      Home!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BloomsdayArtAndScience;
