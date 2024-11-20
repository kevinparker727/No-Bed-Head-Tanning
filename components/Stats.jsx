"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 14,
    text: "Years of Experience",
  },
  {
    word: "Over",
    num: 1000,
    icon: "+",
    text: "Satisfied Clients",
  },
  {
    num: 20,
    text: "Minutes Start to Finish",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex  gap-6 mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 lg:flex items-center text-center lg:justify-center gap-2"
              >
                <p className="text-xl font-semibold pb-2 lg:hidden">
                  {item.word}
                </p>
                <CountUp
                  end={item.num}
                  delay={0}
                  duration={3.5}
                  className="text-3xl lg:text-5xl font-semibold"
                />
                <p className="text-3xl lg:text-5xl font-semibold max-lg:hidden">
                  {item.icon}
                </p>
                <p className="text-xl pt-2 font-light">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
