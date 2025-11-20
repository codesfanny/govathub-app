"use client";
import Image from "next/image";
import React from "react";
import ExperiencesCard from "../Experiences/ExperiencesCard";
import { useRouter } from "next/navigation";

const Premium = () => {
  const router = useRouter();

  return (
    <div>
      <div className="w-[80%] pt-16 flex items-center justify-center gap-30 mx-auto">
        <div className="hidden lg:block">
          <Image
            src="/images/premium-coin.png"
            alt="premium-coin"
            width={600}
            height={600}
          />
        </div>
        <div className="w-full lg:w-[40%] space-y-8">
          <ExperiencesCard
            number="1."
            title="Premium Accelerated Mentoring Experience (PAME)"
            description="No trading system? New to trading?
You can still qualify for our premium mentoring service designed to help you access and manage up to $5M in institutional funding."
          />
          <button
            onClick={() => router.push("../premiumPage")}
            className="bg-[#1d48c0] border-2 border-[#1b48c0]  hover:bg-white hover:text-[#1b48c0] hover:border-[#1b48c0] py-3.5 px-14 font-semibold text-white cursor-pointer transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
