"use client";

import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { Button } from "./ui/button";

const socials = [
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/NoBedHeadTanning?mibextid=LQQJ4d&rdid=69AbBu1emetEL0K1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FpFrnLV1sTPFBFzgS%2F%3Fmibextid%3DLQQJ4d",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/nobedheadspraytanning/",
  },
  {
    icon: <FaEnvelope />,
    path: "mailto:nobedheadspraytanning@gmail.com",
  },
];

import React from "react";

const Socials = () => {
  return (
    <div className="flex justify-center gap-8 my-8">
      {socials.map((link, index) => {
        return (
          <Link href={link.path} key={index} target="_blank">
            <Button variant="outline" size="icon">
              {link.icon}
              {link.pathname}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
