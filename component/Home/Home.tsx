import React from "react";
import Hero from "./Hero/Hero";
import Game from "./Game/Game";
import Premium from "./Premium/Premium";
import Sponsored from "./Sponsored/Sponsored";
import Loss from "./Loss/Loss";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Game />
      <Premium />
      <Sponsored />
      <Loss />
      <Contact />
    </div>
  );
};

export default Home;
