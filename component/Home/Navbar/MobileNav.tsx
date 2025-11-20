import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import { MdClose } from "react-icons/md";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div className="">
      <div
        className={`w-full ${navOpen} h-screen bg-black transform transition-all duration-500 opacity-70 inset-0 fixed z-[1002]`}
      ></div>
      <div
        className={`${navOpen} space-y-6 w-[80%] flex flex-col justify-center text-white sm:w-[60%] h-full bg-blue-950 transform transition-all duration-500 delay-100 fixed z-[1050]`}
      >
        {Navlinks.map((link) => (
          <Link key={link.id} href={link.url}>
            <p className="w-[80%] border-b-[1.5px] pb-6 md:pb-8 border-b-gray-500 text-white mx-auto">
              {link.label}
            </p>
          </Link>
        ))}

        <MdClose
          onClick={closeNav}
          className="absolute right-8 top-8 h-8 w-8 md:h-12 md:w-12 text-gray-300"
        />
      </div>
    </div>
  );
};

export default MobileNav;
