import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bg-[#F9F9F9] w-full lg:py-16 pb-16 lg:pb-0">
      <div className="hidden lg:block absolute bg-[url(/images/investing-03.png)] bg-contain h-60 w-100 left-80 top-25"></div>
      <div className="w-full lg:w-[60%] mx-auto lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-black pt-16 lg:pt-0 pb-24 px-8 flex flex-col space-y-6">
          <div className="space-y-6 lg:space-y-4 flex flex-col mt-8">
            <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#1d48c0] rounded-full">
              <FaMoneyBill className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl text-white font-bold">Govathub</h1>
            <p className="text-white text-xl lg:text-base">
              An accessible, high-performance ans adaptable platform for
              building engaging foreign exchange experience
            </p>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col w-10 h-10 bg-[#1d48c0] text-white items-center justify-center">
              <FaFacebookF className="w-46 h-4 cursor-pointer" />
            </div>
            <div className="flex flex-col w-10 h-10 bg-[#1d48c0] text-white items-center justify-center">
              <FaX className="w-46 h-4 cursor-pointer" />
            </div>
            <div className="flex flex-col w-10 h-10 bg-[#1d48c0] text-white items-center justify-center">
              <FaInstagram className="w-46 h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex lg:space-x-24 space-x-8 text-left lg:w-full w-[80%] mx-auto">
          <div className="flex flex-col space-y-4">
            <p className="text-[#1d48c0] font-semibold text-sm">SITE</p>
            <h1 className="font-semibold text-xl lg:text-2xl text-[#666]">
              Browse a Page
            </h1>
            <p className="text-sm cursor-pointer text-[#666] hover:font-semibold">
              Home
            </p>
            <p className="text-sm cursor-pointer text-[#666] hover:font-semibold">
              About
            </p>
            <p className="text-sm cursor-pointer text-[#666] hover:font-semibold">
              Services
            </p>
            <p className="text-sm cursor-pointer text-[#666] hover:font-semibold">
              Our Approach
            </p>
            <p className="text-sm cursor-pointer text-[#666] hover:font-semibold">
              Contact
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-[#1d48c0] font-semibold text-sm">CONTACT</p>
            <h1 className="font-semibold text-xl lg:text-2xl text-[#666]">
              Get In Touch
            </h1>
            <p className="text-sm text-[#666]">(234) 802 730 4593</p>
            <p className="text-sm text-[#666]">info@govathub.com</p>
            <p className="text-sm text-[#666]">M-F: 9am-6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
