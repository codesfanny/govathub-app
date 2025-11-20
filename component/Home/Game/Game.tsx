"use client";
import React from "react";
import GameCard from "./GameCard";

const goToPremium = () => {
  window.scrollTo({ top: 1400, behavior: "smooth" });
};

const goToSponsor = () => {
  window.scrollTo({ top: 2130, behavior: "smooth" });
};

const goToLoss = () => {
  window.scrollTo({ top: 2900, behavior: "smooth" });
};

const Game = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[80%] lg:pt-16 lg:pb-16 flex flex-col items-center justify-center mx-auto ">
        <div className="flex flex-col items-center space-y-4 pt-16">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Govathub Accelerated Mentoring Experiences (GAME)
          </h1>
          <p className="text-base lg:text-lg">
            Learn how to secure and assess your first $5M in institutional
            funding - Get mentored today!
          </p>
        </div>
        <div className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 lg:text-center mt-20 mb-20 gap-12">
          <GameCard
            icon="/images/premium.png"
            title="Premium Accelerated Mentorship Experience"
            description="Premium Mentorship Program — Secure and Grow Your First $5M Institutional Funding"
            onClick={goToPremium}
          />
          <GameCard
            icon="/images/sponsored.png"
            title="Sponsored Accelerated Mentoring Experience (SAME)"
            description="For Traders with a Working Trading System but Limited Funding"
            onClick={goToSponsor}
          />
          <GameCard
            icon="/images/loss-recovery.png"
            title="Loss-Recovery Accelerated Mentoring Experience"
            description="CoMiNg SoOn!"
            onClick={goToLoss}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
