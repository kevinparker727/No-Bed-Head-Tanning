"use client";

import React from "react";
import ContactButton from "@/components/ContactButton";
import Stats from "@/components/Stats";
import Header from "@/components/Header";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-full">
      <div className="h-[100vh]">
        <div className="bg-home-image bg-cover bg-no-repeat bg-center w-full h-[65vh]">
          <Header />
          <div className="w-full flex justify-center items-center h-4/5 lg:h-3/5">
            <h2 className="h2 w-fit mx-[10%] font-primary text-white font-thin text-center p-8 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-95">
              Natural Beauty Starts Here
            </h2>
          </div>
        </div>
        <div className="h-[32vh] flex flex-col justify-center gap-6 lg:gap-12 text-center">
          <Stats />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5, ease: easeInOut }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 md:gap-7"
          >
            <div className="h2 font-secondary">
              Welcome to No Bed Head Tanning
            </div>
            <div className="w-full flex justify-center">
              <div className="border-[1px] border-accent w-[90%] md:w-[65%]"></div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex items-center h-full w-full px-10 md:px-0 mt-10 mb-12"
      >
        <div className="text-center md:w-full xl:w-1/2">
          <p className="text-lg font-light tracking-wider leading-loose px-8 md:px-20 lg:ml-20  xl:ml-40">
            No Bed Head Tanning brings the perfect glow directly to you with our
            convenient mobile service in Cornwall, NY. We believe that looking
            your best shouldn&#39;t come at the expense of your health, which is
            why we pride ourselves on using only organic, skin-loving products
            that deliver a beautiful, even tan without any harsh chemicals.
            <br /> <br /> Our expert airbrush technique is designed to enhance
            your natural beauty while keeping your skin nourished and radiant.
            Let us help you glow with confidence and ease, wherever you are.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-1/2 flex justify-center max-md:hidden"
        >
          <Image
            alt="Spray Tan Image"
            src={"/assets/home-second-2.jpg"}
            width={600}
            height={600}
            className="w-[300px] h-[450px] lg:w-[350px] lg:h-[500px] xl:w-[450px] xl:h-[600px]"
          />
        </motion.div>
        <div className="flex flex-col items-center pt-8 pb-16"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex justify-center my-20"
      >
        <ContactButton />
      </motion.div>
    </section>
  );
};

export default Home;
