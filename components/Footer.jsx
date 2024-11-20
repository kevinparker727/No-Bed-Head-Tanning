"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Socials from "./Socials";

const nav = [
  {
    name: "about us",
    path: "/about",
  },
  {
    name: "pricing",
    path: "/pricing",
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

const contact = [
  {
    name: "845 - 542 - 8366",
    path: "/",
  },
  {
    name: "email@email.com",
    path: "/",
  },
  {
    name: "Ask a Question",
    path: "/contact",
  },
  {
    name: "Privacy Policy",
    path: "/contact",
  },
];

const legal = [
  {
    name: "terms of use",
    path: "/",
  },
  {
    name: "accessibility",
    path: "/",
  },
  {
    name: "privacy policy",
    path: "/",
  },
];

const Footer = () => {
  return (
    <section className="container mx-auto">
      <div className="border-t border-b border-accent">
        <div className="lg:flex justify-around">
          <div className="md:max-xl:flex md:max-xl:flex-col">
            {/* Title  */}
            <h2 className="h2 flex justify-center my-5">
              No Bed Head Spray Tanning
            </h2>

            <div className="flex flex-col text-center justify-center">
              {/* Paragraph  */}
              <p className="mr-[20%] ml-[20%] text-xl xl:text-2xl">
                We're so excited to work with you.
              </p>
              <div className="max-lg:hidden">
                <Socials />
              </div>
            </div>
          </div>
          <div className="flex justify-around my-5 lg:gap-[100px]">
            {/* Column 1  */}
            <div className="flex flex-col ">
              <h3 className="h3 mb-3 text-accent">Company</h3>
              {/* Nav  */}
              {nav.map((link, index) => {
                return (
                  <Link href={link.path} key={index} className="capitalize">
                    <Button variant="link" className="p-0 capitalize">
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Column 2  */}
            <div className="flex flex-col">
              <h3 className="h3 mb-3 text-accent">Support</h3>
              {/* Nav  */}
              {contact.map((link, index) => {
                return (
                  <Link href={link.path} key={index}>
                    <Button variant="link" className="p-0">
                      {link.name}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* Socials  */}
          <div className="lg:hidden">
            <Socials />
          </div>
        </div>
      </div>

      {/* Legal  */}
      <div className="flex justify-center container mx-auto my-2 gap-5 xl:gap-20">
        {legal.map((link, index) => {
          return (
            <Link href={link.path} key={index}>
              <Button
                variant="link"
                className="text-slate-100/60 capitalize decoration-1 decoration-slate-100/60 p-0"
              >
                {link.name}
              </Button>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;
