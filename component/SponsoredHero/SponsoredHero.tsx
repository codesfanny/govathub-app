import React from "react";

const SponsoredHero = () => {
  return (
    <div className="w-full flex flex-col h-screen lg:justify-center bg-blue-950 bg-blend-multiply bg-[url(/images/sponsored-bg-01.jpg)] bg-bottom bg-cover transition-all duration-300">
      <div className="w-[80%] flex items-end justify-center space-x-16 transition-all duration-300">
        <div
          className="relative w-full lg:w-[50%] flex flex-col py-16 px-16 text-right
         shadow-2xs transition-all duration-300"
        >
          <div className="hidden lg:block absolute bg-blue-900 opacity-30 w-full h-full top-0 right-0 transition-all duration-500"></div>
          <h1 className="mt-20 lg:mt-0 text-5xl lg:text-6xl font-semibold leading-16 lg:leading-18 text-white z-200">
            Sponsored <br /> Accelerated <br /> Mentoring <br /> Experience
          </h1>
        </div>
        <div className="hidden lg:block">
          <button className="cursor-pointer text-white bg-transparent font-bold border-2 border-white hover:bg-[#1b48c0] hover:border-[#1b48c0] hover:text-white py-3 px-12 transition-all duration-500">
            CHAT WITH AN EXPERT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsoredHero;
