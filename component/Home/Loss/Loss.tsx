import Image from "next/image";
import React from "react";
import ExperiencesCard from "../Experiences/ExperiencesCard";

const Loss = () => {
  return (
    <div className="lg:mt-50 mb-20 lg:mb-0">
      <div className="relative w-full lg:pt-16 lg:pb-16 flex items-center justify-center gap-30 mx-auto">
        <div className="hidden lg:block">
          <Image
            src="/images/investing-14.jpg"
            alt="sponsored"
            width={500}
            height={500}
            className="absolute top-25 left-40"
          />
          <Image
            src="/images/investing-03.png"
            alt="sponsored-2"
            width={500}
            height={500}
          />
        </div>
        <div className="w-[80%] lg:w-[40%]">
          <ExperiencesCard
            number="3."
            title="Loss-Recovery Accelerated Mentoring Experience (LAME)"
            description="CoMiNg SoOn!"
          />
        </div>
      </div>
    </div>
  );
};

export default Loss;
