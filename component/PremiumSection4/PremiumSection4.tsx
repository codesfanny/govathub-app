import React from "react";

const PremiumSection4 = () => {
  return (
    <div className="w-full mx-auto bg-white py-16">
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <div className="w-full mx-auto flex items-center justify-center lg:space-x-8">
          <div className="space-y-8">
            <h1 className="text-3xl font-medium">Final Phase</h1>
            <div className="lg:pl-16 space-y-8">
              <p>
                Develop Your Own Trading System — at $1,000 fee per month, until
                you build a functional strategy. Once completed, your monthly
                access charge stops, and the profit share increases to 70%.
              </p>
              <div className="w-full">
                <button className="cursor-pointer text-white bg-[#1b48c0] font-bold border-2 border-[#1b48c0] hover:bg-white hover:border-[#1b48c0] hover:text-[#1b48c0] py-3 px-10 lg:px-12 transition-all duration-500">
                  CHAT WITH AN EXPERT
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-[800px] h-[300px] bg-[url(/images/business-05.jpg)] bg-center bg-cover"></div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSection4;
