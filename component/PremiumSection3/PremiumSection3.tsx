import React from "react";

const PremiumSection3 = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="w-full lg:w-[80%] py-8 lg:flex items-center justify-center lg:gap-8 mx-auto transition-all duration-500">
        <div className="w-auto lg:w-[350px] h-[500px] bg-[url(/images/investing-24.jpg)] bg-center"></div>
        <div className="bg-gray-700 w-auto lg:w-[350px] h-[500px] flex flex-col space-y-4 justify-center px-10 text-white">
          <h1 className="text-3xl leading-10 font-medium mb-10">
            Eligibility <br />
            Requirements
          </h1>
          <p>
            Must be a working-class professional or a retired expert in any
            field.
          </p>
          <p>
            Must have a minimum of $8,000 - $10,000 to cover application
            processes and service charges.
          </p>
        </div>
        <div className="flex flex-col justify-center lg:ml-8 space-y-4 px-8 py-16 lg:px-0 lg:py-0">
          <h1 className="text-3xl font-medium mb-10">Program Structure</h1>
          <p className="lg:hidden">
            Our initial goal is to help you scale up to the $200,000 funding
            stage within the first 12 months of your subscription.
          </p>
          <p className="hidden lg:block">
            Our initial goal is to help you scale up to the $200,000 funding
            stage <br />
            within the first 12 months of your subscription.
          </p>
          <p className="lg:hidden">
            During this phase, the monthly service fee is $500, with a 60%
            profit-sharing arrangement.
          </p>
          <p className="hidden lg:block">
            During this phase, the monthly service fee is $500, with a 60%{" "}
            <br />
            profit-sharing arrangement.
          </p>
          <p className="lg:hidden">
            Each client receives personalized mentorship focused on strategic
            growth and funding progression.
          </p>
          <p className="hidden lg:block">
            Each client receives personalized mentorship focused on strategic{" "}
            <br />
            growth and funding progression.
          </p>
        </div>
      </div>
      <div className="lg:flex space-x-8">
        <div className="w-full lg:w-[700] h-[400px] bg-[#1b48c0] flex flex-col justify-center px-8 items-end transition-all duration-500">
          <div className="w-full lg:w-[60%] space-y-4 text-white">
            <h1 className="text-3xl font-medium">Consequently...</h1>
            <p>After reaching the $200K funding stage:</p>
            <div className="text-left ml-10 space-y-4">
              <li>
                The monthly fee increase to $1,000, maintaining a 60% profit
                share
              </li>
              <li>
                You will undergo an intensive 12-module training to prepare for
                the Chief Risk Officer (CRO) Assessment
              </li>
            </div>
          </div>
        </div>
        <div className="w-[550px] h-[400px] bg-[url(/images/investing-22.jpg)] bg-center transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default PremiumSection3;
