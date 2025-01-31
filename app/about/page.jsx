"use client";

import Header from "@/components/Header";
import React from "react";
import { motion, easeInOut } from "framer-motion";

const About = () => {
  return (
    <section>
      <div className="bg-about-hero-image bg-cover bg-no-repeat bg-top xl:bg-center w-full h-[85vh]">
        <Header />
        <div className="w-full flex justify-center items-center h-4/5">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-85"
          >
            The Story Behind No Bed Head
          </motion.h2>
        </div>
      </div>

      <div className="container mx-auto">
        {/* About the Owner  */}
        <div className="flex flex-col gap-8">
          <div className="h-[15vh]">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.75 }}
              viewport={{ once: true }}
              className="h2 mt-8 w-full text-center underline underline-offset-8 decoration-accent-hover decoration-2"
            >
              Meet the Owner
            </motion.h2>
          </div>
          <div className="flex w-full items-center justify-around lg:mt-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: easeInOut }}
              viewport={{ once: true }}
              className="bg-heather-portrait bg-cover md:bg-contain bg-no-repeat bg-right md:bg-center w-1/2 lg:w-1/3 rounded-xl lg:rounded-none h-[45vh] sm:h-[60vh]"
            ></motion.div>
            <div className="w-1/3 text-center lg:w-2/3 lg:pl-10">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.75, ease: easeInOut }}
                viewport={{ once: true }}
                className="h1 text-3xl lg:text-4xl font-thin leading-loose lg:mb-5"
              >
                Hi, I&#39;m Heather. Welcome to My Company!
              </motion.h3>
              <div className="w-full flex gap-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5, ease: easeInOut }}
                  viewport={{ once: true }}
                  className="p max-lg:hidden xl:text-lg lg:font-light lg:tracking-wider xl:leading-loose"
                >
                  I started No Bed Head Tanning in May 2009 with a simple goal:
                  to help people feel their best without sacrificing their
                  health. I&#39;ve always loved the confidence that comes with a
                  fresh tan, but laying in a tanning bed, sweating and worrying
                  about the UV, never felt worth it to me. <br /> <br />
                  That&#39;s when I decided to create No Bed Head Spray Tanning.
                  I wanted to offer a safe, convenient, and healthy alternative
                  that would let my clients enjoy a beautiful, natural-looking
                  tan without any of the risks of tanning beds. For me, it&#39;s
                  about more than just the color—it&#39;s about helping you feel
                  vibrant, confident, and ready to take on the world, one tan at
                  a time.
                </motion.p>
                {/* <p className="p max-lg:hidden xl:text-lg xl:font-light xl:tracking-wider xl:leading-relaxed">
                  That&#39;s when I decided to create No Bed Head Spray Tanning.
                  I wanted to offer a safe, convenient, and healthy alternative
                  that would let my clients enjoy a beautiful, natural-looking
                  tan without any of the risks of tanning beds. For me, it&#39;s
                  about more than just the color—it&#39;s about helping you feel
                  vibrant, confident, and ready to take on the world, one tan at
                  a time.
                </p> */}
              </div>
            </div>
            {/* <div className="bg-heather-portrait bg-cover md:bg-contain bg-no-repeat bg-center w-1/2 xl:w-1/3 rounded-xl h-[45vh]  sm:h-[60vh] "></div> */}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="p lg:hidden "
          >
            I started No Bed Head Tanning in May 2009 with a simple goal: to
            help people feel their best without sacrificing their health.
            I&#39;ve always loved the confidence that comes with a fresh tan,
            but laying in a tanning bed, sweating and worrying about the UV,
            never felt worth it to me.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="p lg:hidden"
          >
            That&#39;s when I decided to create No Bed Head Spray Tanning. I
            wanted to offer a safe, convenient, and healthy alternative that
            would let my clients enjoy a beautiful, natural-looking tan without
            any of the risks of tanning beds. For me, it&#39;s about more than
            just the color—it&#39;s about helping you feel vibrant, confident,
            and ready to take on the world, one tan at a time.
          </motion.p>
          <div className="flex justify-center my-10">
            <span className="border-[1px] w-10/12 border-accent"></span>
          </div>
        </div>

        {/* About the Company  */}
        <div className="flex flex-col gap-8 mb-16 mx-[3%]">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="h2 mt-8 w-full text-center underline underline-offset-8 decoration-accent-hover decoration-2"
          >
            Company Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="p text-center xl:text-lg lg:font-light lg:tracking-wider xl:leading-loose xl:mx-20 p-6 lg:hover:scale-110 lg:hover:text-white rounded-xl shadow-2xl shadow-zinc-900 bg-stone-500/50 transition-all duration-300 ease-in-out"
          >
            At No Bed Head Tanning, we&#39;re dedicated to making you look and
            feel amazing without compromising your health. We specialize in
            custom airbrush tanning that uses high-quality, organic products and
            solutions to give you a flawless, natural tan. Our premium formulas
            not only tan but also nourish your skin, leaving it moisturized and
            glowing—a process so seamless that only you will know it&#39;s a
            spray tan.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
