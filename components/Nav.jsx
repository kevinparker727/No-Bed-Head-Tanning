"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const Nav = () => {
  const pathname = usePathname();

  return links.map((link, index) => {
    return (
      <Link
        href={link.path}
        key={index}
        className={`${
          link.path === pathname &&
          "text-accent border-b-[1px] pb-1 border-accent"
        } uppercase  hover:text-accent-hover transition-all duration-200 tracking-wide`}
      >
        {link.name}
      </Link>
    );
  });
};

export default Nav;
