"use client";

import React from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const links = [
  {
    name: "about",
    path: "/about",
  },
  {
    name: "pricing",
    path: "/pricing",
  },
  {
    name: "gallery",
    path: "/gallery",
  },
  {
    name: "tanning tips",
    path: "/tanning-tips",
  },
  {
    name: "disclosures",
    path: "/disclosures",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[30px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        {/* logo  */}
        <div>
          <SheetClose asChild key={true}>
            <Link href={"/"}>
              <h1 className="flex flex-col items-center mt-24 mb-20 font-secondary text-4xl text-accent">
                No Bed Head
              </h1>
            </Link>
          </SheetClose>
        </div>
        {/* nav  */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={true}>
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  } uppercase text-lg font-extralight hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
          {/* button  */}
          <SheetClose asChild key={true}>
            <Link href={"/contact"} className="mt-20">
              <Button className="font-light uppercase p-8 bg-accent-hover hover:bg-accent transition-all tracking-wide">
                Contact
              </Button>
            </Link>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
