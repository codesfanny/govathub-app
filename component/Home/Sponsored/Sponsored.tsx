"use client";
import Image from "next/image";
import React from "react";
import ExperiencesCard from "../Experiences/ExperiencesCard";
import { useRouter } from "next/navigation";

const Sponsored = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-[80%] pt-16 pb-16 flex items-center justify-center gap-30 mx-auto bg-white lg:bg-[url(/images/investing-15.jpg)] bg-contain bg-no-repeat">
        <div className="w-full lg:w-[40%] space-y-8">
          <ExperiencesCard
            number="2."
            title="Sponsored Accelerated Mentoring Experience (SAME)"
            description="Already have a function trading system but lack the capital to access the $5M institutional funding? This offer is designed for you."
          />
          <button
            onClick={() => router.push("../sponsoredPage")}
            className="bg-white border-2 border-[#1b48c0] hover:bg-[#1d48c0] hover:text-white hover:border-[#1b48c0] py-3.5 px-14 font-semibold text-[#1d48c0] cursor-pointer transition-all duration-300"
          >
            Learn More
          </button>
        </div>
        <div className="relative hidden lg:block">
          <Image
            src="/images/investing-18.jpg"
            alt="sponsored"
            width={600}
            height={600}
            className="absolute top-10 right-10"
          />
          <Image
            src="/images/investing-03.png"
            alt="sponsored-2"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
