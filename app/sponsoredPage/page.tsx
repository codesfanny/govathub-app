import SponsoredHero from "@/component/SponsoredHero/SponsoredHero";
import SponsoredSection2 from "@/component/SponsoredSection2/SponsoredSection2";
import SponsoredSection3 from "@/component/SponsoredSection3/SponsoredSection3";
import SponsoredSection4 from "@/component/SponsoredSection4/SponsoredSection4";
import React from "react";

const sponsoredPage = () => {
  return (
    <div className="relative">
      <div className="w-full fixed top-0 left-0 z-0">
        <SponsoredHero />
      </div>

      <div className="relative z-10 pt-[70vh] lg:pt-[80vh] transition-all duration-500">
        <SponsoredSection2 />
        <SponsoredSection3 />
        <SponsoredSection4 />
      </div>
    </div>
  );
};

export default sponsoredPage;
