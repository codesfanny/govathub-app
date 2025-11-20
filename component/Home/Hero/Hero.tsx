import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative flex justify-center flex-col h-screen bg-blue-950 bg-blend-overlay bg-[url(/images/hero-image.jpg)] bg-center bg-cover">
      <div className="w-[80%] pt-16 flex flex-col mx-auto items-center space-y-12 text-center">
        <h1 className="font-semibold text-[28px] leading-10 lg:text-6xl lg:leading-20 text-gray-50">
          An accessible, high-performance, and adaptable platform for building
          engaging foreign exchange experience
        </h1>
        <p className="text-base lg:text-3xl font-semibold lg:font-medium text-gray-50 mt-12">
          This is a new initiative but backed by nearly two decades of
          experience
        </p>
      </div>
    </div>
  );
};

export default Hero;
