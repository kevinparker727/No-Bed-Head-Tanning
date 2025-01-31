"use client";

import Header from "@/components/Header";
import React from "react";
import { motion, easeInOut } from "framer-motion";

const newTans = [
  {
    title: "Full Body (non-student)",
    price: 75,
  },
  {
    title: "Full Body (student)",
    price: 60,
  },
  {
    title: "Upper Body and Face",
    price: 45,
  },
  {
    title: "Lower Body",
    price: 45,
  },
];

const touchUps = [
  {
    title: "Full Body",
    price: 35,
  },
  {
    title: "Upper / Lower Half",
    price: 25,
  },
  {
    title: "Face",
    price: 20,
  },
  {
    title: "Hands / Arms",
    price: 20,
  },
];

const nonStudentPackage = [
  {
    title: "3 Tans",
    price: 215,
  },
  {
    title: "5 Tans",
    price: 350,
  },
  {
    title: "8 Tans",
    price: 520,
  },
];

const studentPackage = [
  {
    title: "3 Tans",
    price: 165,
  },
  {
    title: "5 Tans",
    price: 275,
  },
  {
    title: "8 Tans",
    price: 425,
  },
];

const seasonalPackage = [
  {
    title: "6 People (3 Couples)",
    price: 280,
  },
  {
    title: "10 People (5 Couples)",
    price: 540,
  },
];

const Pricing = () => {
  return (
    <section className="mb-16">
      <div className="bg-pricing-hero-image bg-cover bg-no-repeat bg-right lg:bg-center w-full h-[90vh]">
        <Header />
        <div className="w-full flex justify-center items-center h-4/5">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85"
          >
            Organic, Natural Tans Tailored to Your Skin
          </motion.h1>
        </div>
      </div>

      <p className="text-xs text-white/70 mt-8 text-center h-[10vh]">
        *Please see
        <a
          href="/disclosures"
          className="underline underline-offset-4 text-white/90 mx-1"
        >
          Disclosures
        </a>
        page for a full breakdown on exceptions to these prices and potential
        changes.
      </p>
      <div className="container mx-auto lg:flex justify-around">
        {/* Individual Rates  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="h3 font-secondary text-4xl">Individual Rates</h3>
        </motion.div>

        {/* Desktop Package Rates  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
          viewport={{ once: true }}
          className="text-center mb-10 max-lg:hidden"
        >
          <h3 className="h3 font-secondary text-4xl">Package Rates</h3>
        </motion.div>
      </div>

      <div className="container lg:flex justify-around w-full">
        <div className="flex justify-center gap-12 mb-2 xl:w-1/2">
          {/* Individual Rates Column 1  */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center p-4 py-6 lg:h-[500px] xl:h-[400px] lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
          >
            <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
              Fresh Tans
            </h3>
            {newTans.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-accent mb-4"
                >
                  <li>{item.title}</li>
                  <span>${item.price}</span>
                </ul>
              );
            })}
          </motion.div>
          {/* Individual Rates Column 2  */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center p-4 py-6 lg:p-6 lg:h-[460px] xl:h-[400px] lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
          >
            <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
              Touch Ups
            </h3>
            {touchUps.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-accent mb-4"
                >
                  <li>{item.title}</li>
                  <span>${item.price}</span>
                </ul>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Package Rates  */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: easeInOut }}
          viewport={{ once: true }}
          className="text-center my-10 lg:hidden"
        >
          <h3 className="h3 font-secondary text-4xl">Package Rates</h3>
        </motion.div>

        <div className="mb-2 grid grid-cols-6 xl:w-1/2 gap-5">
          {/* Package Rates Column 1  */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="col-start-2 col-span-2 text-center p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
          >
            <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
              Non- <br />
              <br />
              Students
            </h3>
            {nonStudentPackage.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-accent mb-4"
                >
                  <li>{item.title}</li>
                  <span>${item.price}</span>
                </ul>
              );
            })}
          </motion.div>
          {/* Package Rates Column 2  */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="col-start-4 col-span-2 text-center p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
          >
            <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
              Students
            </h3>
            {studentPackage.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-accent mb-4"
                >
                  <li>{item.title}</li>
                  <span>${item.price}</span>
                </ul>
              );
            })}
          </motion.div>
          {/* Package Rates Column 3  */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center col-start-2 col-span-4 lg:mt-5 p-4 py-6 lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
          >
            <div className="text-center mb-5">
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8">
                <br className="lg:hidden" />
                Prom / Homecoming
              </h3>
              <p className="text-xs text-white/60 mt-5">
                *Dates vary per school.
              </p>
            </div>
            {seasonalPackage.map((item, index) => {
              return (
                <ul
                  key={index}
                  className="list-disc list-inside marker:text-accent mb-2"
                >
                  <li>{item.title}</li>
                  <span>${item.price}</span>
                </ul>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
