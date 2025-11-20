"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const ResponsiveNav = () => {
  const [isVisibile, setIsVisible] = useState(false);
  const openNavHandler = () => setIsVisible(true);
  const closeNavHandler = () => setIsVisible(false);

  return (
    <div>
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={isVisibile} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
