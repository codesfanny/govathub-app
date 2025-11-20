import React from "react";

const SponsoredSection2 = () => {
  return (
    <div className="w-full mx-auto flex flex-col bg-white rounded-2xl lg:rounded-4xl shadow-xl shadow-black">
      <div className="pt-2">
        <div className="flex flex-col w-[60%] lg:w-[30%] border-b-4 lg:border-b-8 border-gray-200 rounded-2xl lg:mt-3 mx-auto"></div>
      </div>
      <div className="w-full py-2 h-[350px] lg:h-[600px] bg-[url(/images/investing-39.jpg)] bg-contain bg-no-repeat bg-bottom">
        <div className="w-[80%] lg:w-[60%] mx-auto">
          <div className="lg:w-[55%] flex flex-col pt-2 lg:pt-16">
            <h1 className="font-bold text-xl lg:text-3xl leading-8 lg:leading-10 bg-linear-to-bl from-blue-950 to-red-600 bg-clip-text text-transparent">
              For Traders with a Working Trading System but Limited Funding
            </h1>
            <p className="leading-7 mt-4">
              Already have a functional trading system <br /> but lack the
              capital to access the $5M institutional funding? <br /> This offer
              is designed for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredSection2;
