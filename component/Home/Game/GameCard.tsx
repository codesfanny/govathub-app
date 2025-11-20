import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
  onClick: () => void;
};

const GameCard = ({ icon, title, description, onClick }: Props) => {
  return (
    <div
      className="flex flex-col lg:items-center space-y-2 lg:space-y-6 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={icon}
        alt="img"
        width={30}
        height={30}
        className="lg:mx-auto object-contain hidden lg:block"
      />
      <h1 className="text-2xl text-[#1d48c0] font-medium">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default GameCard;
