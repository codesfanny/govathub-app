import React from "react";

type Props = {
  number: string;
  title: string;
  description: string;
};

const ExperiencesCard = ({ number, title, description }: Props) => {
  return (
    <div className="space-y-6">
      <p className="text-[#1d48c0]">{number}</p>
      <h1 className="text-2xl lg:text-4xl lg:leading-12 font-medium">
        {title}
      </h1>
      <p className="leading-7">{description}</p>
    </div>
  );
};

export default ExperiencesCard;
