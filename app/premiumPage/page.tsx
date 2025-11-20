import PremiumHero from "@/component/PremiumHero/PremiumHero";
import PremiumSection2 from "@/component/PremiumSection2/PremiumSection2";
import PremiumSection3 from "@/component/PremiumSection3/PremiumSection3";
import PremiumSection4 from "@/component/PremiumSection4/PremiumSection4";
import React from "react";

const premiumPage = () => {
  return (
    <div className="relative mb-0">
      <div className="fixed top-0 left-0 w-full z-0">
        <PremiumHero />
      </div>
      <div className="relative z-10 pt-[70vh] lg:pt-[80vh] transition-all duration-500">
        <PremiumSection2 />
        <PremiumSection3 />
        <PremiumSection4 />
      </div>
    </div>
  );
};

export default premiumPage;
