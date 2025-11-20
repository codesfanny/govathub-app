"use client";
import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    handler();

    return () => window.removeEventListener("scroll", handler);
  }, []);

  const router = useRouter();
  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white shadow-md" : "fixed"
      } duration-300 h-[12vh] z-500 w-full fixed`}
    >
      <div className="w-[90%] lg:w-[80%] mx-auto h-full flex items-center justify-between">
        <div
          className="space-x-2 flex items-center cursor-pointer"
          onClick={() => router.push("/.")}
        >
          <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#1d48c0] rounded-full">
            <FaMoneyBill className="w-6 h-6 text-white" />
          </div>
          <h1
            className={`text-2xl ${
              navBg ? "text-[#1d48c0]" : "text-white"
            } font-bold hidden lg:block md:block`}
          >
            Govathub
          </h1>
        </div>
        <div className="gap-12">
          <div
            className={`space-x-12 ${
              navBg ? "text-[#1d48c0]" : "text-white"
            } font-medium lg:flex items-center justify-center hidden`}
          >
            {Navlinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className="hover:text-orange-400 hidden lg:block">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button className="text-white lg:font-semibold bg-[#1d48c0] px-6 lg:px-10 py-2.5 rounded-lg cursor-pointer hover:bg-orange-400">
            Login
          </button>
          <div>
            <HiBars3BottomRight
              onClick={openNav}
              className={`w-8 h-8 lg:hidden ${
                navBg ? "text-[#1b48c0]" : "text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
