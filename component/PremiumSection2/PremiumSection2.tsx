import React from "react";

const PremiumSection2 = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-2xl lg:rounded-4xl shadow-xl shadow-black">
      <div className="pt-2">
        <div className="flex flex-col w-[60%] lg:w-[30%] border-b-4 lg:border-b-8 border-gray-200 rounded-2xl lg:mt-3 mx-auto"></div>
      </div>
      <div className="w-full py-2 h-[350px] lg:h-[600px] bg-[url(/images/investing-39.jpg)] bg-contain bg-no-repeat bg-bottom">
        <div className="w-[80%] lg:w-[60%] mx-auto">
          <div className="lg:w-[55%] flex flex-col pt-2 lg:pt-16">
            <h1 className="font-bold lg:font-normal text-xl lg:text-3xl leading-8 lg:leading-10 bg-linear-to-bl to-red-600 from-blue-950 bg-clip-text text-transparent">
              Premium Mentorship Program - Secure and Grow Your First $5M
              Institutional Funding
            </h1>
            <p className="leading-7 mt-4">
              No trading system? New to trading? <br />
              You can still qualify for our premium mentoring service designed
              to help you access and manage up to $5M in institutional funding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSection2;
