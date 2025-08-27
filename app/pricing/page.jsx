"use client";

import Header from "@/components/Header";
import React from "react";
import { motion, easeInOut } from "framer-motion";

const individualStudioNewTans = [
  {
    title: "Full Body",
    price: 75,
  },
  {
    title: "Upper Body and Face",
    price: 40,
  },
  {
    title: "Lower Body",
    price: 40,
  },
  {
    title: "Full Body - Student",
    price: 60,
  },
  {
    title: "Upper Body and Face - Student",
    price: 30,
  },
  {
    title: "Lower Body - Student",
    price: 30,
  },
];

const individualStudioTouchUps = [
  {
    title: "Full Body",
    price: 20,
  },
  {
    title: "Upper / Lower Half",
    price: 20,
  },
  {
    title: "Face",
    price: 10,
  },
  {
    title: "Hands / Arms",
    price: 15,
  },
  {
    title: "Full Body - Student",
    price: 15,
  },
  {
    title: "Upper / Lower Half - Student",
    price: 15,
  },
  {
    title: "Face - Student",
    price: 5,
  },
  {
    title: "Hands / Arms - Student",
    price: 10,
  },
];

const individualMobileNewTans = [
  {
    title: "Full Body",
    price: "90+",
  },
  {
    title: "Upper Body and Face",
    price: 50,
  },
  {
    title: "Lower Body",
    price: 50,
  },
  {
    title: "Full Body - Student",
    price: 75,
  },
  {
    title: "Upper Body and Face - Student",
    price: 45,
  },
  {
    title: "Lower Body - Student",
    price: 45,
  },
];

const individualMobileTouchUps = [
  {
    title: "Full Body",
    price: 75,
  },
  {
    title: "Upper / Lower Half",
    price: 55,
  },
  {
    title: "Face",
    price: 35,
  },
  {
    title: "Hands / Arms",
    price: 35,
  },
  {
    title: "Full Body (Student)",
    price: 65,
  },
  {
    title: "Upper / Lower Half (Student)",
    price: 40,
  },
  {
    title: "Face (Student)",
    price: 30,
  },
  {
    title: "Hands / Arms (Student)",
    price: 30,
  },
];

const packageStudioNonStudent = [
  {
    title: "3 Tans",
    price: 225,
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

const packageStudioStudent = [
  {
    title: "3 Tans",
    price: 175,
  },
  {
    title: "5 Tans",
    price: 275,
  },
  {
    title: "8 Tans",
    price: 465,
  },
];

const packageMobileNonStudent = [
  {
    title: "3 Tans",
    price: 240,
  },
  {
    title: "5 Tans",
    price: 400,
  },
  {
    title: "8 Tans",
    price: 620,
  },
];

const packageMobileStudent = [
  {
    title: "3 Tans",
    price: 200,
  },
  {
    title: "5 Tans",
    price: 325,
  },
  {
    title: "8 Tans",
    price: 500,
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

      <p className="text-xs text-white/70 m-8 text-center">
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
      <div className="w-full flex justify-center">
        <p className="w-fit text-md bg-stone-600 py-6 px-6 rounded-lg text-white/70 text-center mb-10 h-[10vh]">
          Note: In-studio touch ups scheduled within 24 hours of your original
          tan are free of charge.
        </p>
      </div>
      {/* Individual Rates */}
      <div className="container mx-auto">
        <div className="container mx-auto">
          {/* Individual Rates  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="h3 font-secondary text-4xl mb-8">
              Individual Rates
            </h3>
            {/* <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
            Mobile mobile size
          </h3> */}
          </motion.div>
        </div>

        {/* Desktop Studio Rates  */}
        <div className="container w-full mx-auto lg:flex justify-around">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 max-lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              In-Studio
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 max-lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              Mobile
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              In-Studio
            </h3>
          </motion.div>
        </div>

        <div className="container lg:flex justify-around w-full xl:gap-10">
          <div className="flex justify-center gap-5 mb-2 xl:w-1/2">
            {/* Individual Rates - Mobile Column 1  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:h-[500px] xl:h-[590px] lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Fresh Tans
              </h3>
              {individualStudioNewTans.map((item, index) => {
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
            {/* Individual Rates - Mobile Column 2  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:p-6 lg:h-[460px] xl:h-[780px] lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Touch Ups
              </h3>
              {individualStudioTouchUps.map((item, index) => {
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

          {/* Mobile-size Individual Rates  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center my-10 lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              Mobile
            </h3>
          </motion.div>

          <div className="flex justify-center gap-5 mb-2 xl:w-1/2">
            {/* Individual Rates - Mobile Column 3  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:h-[500px] xl:h-[590px] lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Fresh Tans
              </h3>
              {individualMobileNewTans.map((item, index) => {
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
            {/* Individual Rates - Mobile Column 4  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:p-6 lg:h-[460px] xl:h-[780px] lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Touch Ups
              </h3>
              {individualMobileTouchUps.map((item, index) => {
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

          <div className="mb-2 gap-5"></div>
        </div>
      </div>

      {/* Package Rates */}
      <div className="container mx-auto">
        <div className="container mx-auto">
          {/* Individual Rates  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="h3 font-secondary text-4xl mt-14 mb-8">
              Package Rates
            </h3>
            {/* <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
            Mobile mobile size
          </h3> */}
          </motion.div>
        </div>

        {/* Desktop Studio Rates  */}
        <div className="container w-full mx-auto lg:flex justify-around">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 max-lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              In-Studio
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 max-lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              Mobile
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              In-Studio
            </h3>
          </motion.div>
        </div>

        <div className="container lg:flex justify-around w-full xl:gap-10">
          <div className="flex justify-center gap-5 mb-2 xl:w-1/2">
            {/* Package Rates - In-Studio Non Student  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:h-[500px] xl:h-[320px] lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Non-Student
              </h3>
              {packageStudioNonStudent.map((item, index) => {
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
            {/* Package Rates - In-Studio Student  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:p-6 lg:h-[460px] xl:h-[320px] lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Student
              </h3>
              {packageStudioStudent.map((item, index) => {
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

          {/* Package Rates - Mobile Non Student  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="text-center my-10 lg:hidden"
          >
            {/* <h3 className="h3 font-secondary text-4xl mb-5">Package Rates</h3> */}
            <h3 className="h3 font-primary font-thin text-2xl underline underline-offset-4 decoration-accent decoration-2">
              Travel
            </h3>
          </motion.div>

          <div className="flex justify-center gap-5 mb-2 xl:w-1/2">
            {/* Package Rates - Mobile Student  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:h-[500px] xl:h-[320px] lg:p-6 lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Non-Student
              </h3>
              {packageMobileNonStudent.map((item, index) => {
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
            {/* Individual Rates - Mobile Column 4  */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: easeInOut }}
              viewport={{ once: true }}
              className="text-center p-4 py-6 lg:p-6 lg:h-[460px] xl:h-[320px] lg:hover:scale-110 rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300"
            >
              <h3 className="h3 font-normal underline decoration-accent underline-offset-8 mb-5">
                Student
              </h3>
              {packageMobileStudent.map((item, index) => {
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

          <div className="mb-2 gap-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
