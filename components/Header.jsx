import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

// Components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 text-white/80  bg-stone-500/50 drop-shadow-xl backdrop-blur-md opacity-8">
      <div className="mx-10 lg:mx-10  flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="tracking-widest text-center border-2 py-1 px-2 lg:p-3 rounded-lg border-accent hover:border-accent-hover transition-all duration-200">
            <div className="font-secondary text-xl lg:text-2xl font-semibold">
              No Bed Head <br />
            </div>
            <div className="font-light text-[15px] lg:text-[18px]">Tanning</div>
          </h1>
        </Link>

        {/* desktop nav & contact button */}
        <div className="hidden lg:flex gap-3 items-center">
          <Nav />
          <Link href={"/contact"} className="">
            <Button className="font-light uppercase text-md p-7 hover:bg-accent-hover transition-all duration-200 tracking-wide">
              Contact
            </Button>
          </Link>
        </div>

        {/* mobile nav  */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
