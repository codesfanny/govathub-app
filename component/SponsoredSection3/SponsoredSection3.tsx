import React from "react";

const SponsoredSection3 = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <div className="w-full lg:w-[80%] py-8 lg:flex items-center justify-center lg:gap-8 mx-auto transition-all duration-500">
        <div className="w-auto lg:w-[350px] h-[400px] lg:h-[700px] bg-[url(/images/investing-24.jpg)] bg-center bg-cover"></div>
        <div className="bg-gray-700 lg:w-[350px] h-auto lg:h-[700px] flex flex-col space-y-4 py-16 lg:py-0 justify-center px-8 text-white">
          <h1 className="text-3xl leading-10 font-medium mb-10">
            Eligibility <br />
            Requirements
          </h1>
          <p>Present a 90-day demo trading record on a $10,000 account.</p>
          <p>
            Maintain a maximum drawdown of 9% and a profit factor of at least 1
            — meaning you must achieve a minimum profit of 9% or more over the
            90 days.
          </p>
          <p>
            Submit your verified trading results and book a review session to
            begin your funding evaluation
          </p>
        </div>
        <div className="flex flex-col justify-center ml-0 lg:ml-8 space-y-4 px-8 lg:px-0 py-16 lg:py-0">
          <h1 className="text-3xl font-medium mb-10">Program Structure</h1>
          <p className="font-bold">OUR INITIAL GOAL</p>
          <p className="pb-8 lg:pb-0">
            Our primary objective is to guide you through an intensive <br />{" "}
            12-module training program designed to equip you with the essential
            skills needed <br /> to become a successful professional fund
            manager within a private equity firm.
          </p>
          <p className="font-bold">FUNDING & SUPPORT</p>
          <p>
            During this phase, we will sponsor you to access your first $5M in
            institutional funding, <br />
            covering all setup costs. Additionally, we will finance your <br />{" "}
            monthly operational expenses — as long as you consistently meet your{" "}
            <br />
            performance metrics — until you begin earning your first profit
            share.
          </p>
          <p className="pb-8 lg:pb-0">
            We believe that a trader’s financial stability, <br /> especially in
            the early stages, should not depend solely <br /> on monthly trading
            performance — and our program is built to ensure exactly that.
          </p>
          <p className="font-bold">MENTORSHIP & DEVELOPMENT</p>
          <p className="">
            Every trader will receive personalized mentorship from <br /> an
            industry veteran, along with dedicated support from an account
            manager <br /> focused on your continuous growth and professional
            certification journey — all the <br /> way until you establish
            yourself as a professional fund manager.
          </p>
        </div>
      </div>
      {/* <div className="flex space-x-8">
        <div className="w-[700] h-[400px] bg-[#1b48c0] flex flex-col justify-center px-8 items-end transition-all duration-500">
          <div className="w-[60%] space-y-4 text-white">
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
      </div> */}
    </div>
  );
};

export default SponsoredSection3;
