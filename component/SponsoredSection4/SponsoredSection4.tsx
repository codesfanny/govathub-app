import React from "react";

const SponsoredSection4 = () => {
  return (
    <div className="bg-white">
      <div className="w-[80%] lg:w-[60%] mx-auto">
        <div className="mx-auto pb-16 lg:py-16 flex items-center justify-center lg:space-x-8">
          <div className="space-y-8">
            <h1 className="text-3xl font-medium">Final Phase</h1>
            <div className="pl-0 lg:pl-16 space-y-8">
              <p>
                When you become the professional fund manager we believe you’re
                destined to be — earning profit shares from private equity firms
                — we will receive 30% of your future profit share, up to a total
                of $1 million.
              </p>
              <div className="">
                <button className="cursor-pointer text-white bg-[#1b48c0] font-bold border-2 border-[#1b48c0] hover:bg-white hover:border-[#1b48c0] hover:text-[#1b48c0] py-3 px-12 transition-all duration-500">
                  CHAT WITH AN EXPERT
                </button>
              </div>
            </div>
          </div>
          <div className="w-[800px] h-[300px] bg-[url(/images/business-05.jpg)] bg-center bg-cover hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredSection4;
