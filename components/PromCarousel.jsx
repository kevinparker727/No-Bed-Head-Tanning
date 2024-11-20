"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DotButton, useDotButton } from "./ui/EmblaCarouselDotButton";

import Image from "next/image";

const PromCarousel = (props) => {
  const images = [
    {
      id: 1,
      src: "/assets/prom/prom1.jpg",
      height: 250,
    },
    {
      id: 2,
      src: "/assets/prom/prom2.jpg",
      height: 250,
    },
    {
      id: 3,
      src: "/assets/prom/prom3.jpg",
      height: 250,
    },
    {
      id: 4,
      src: "/assets/prom/prom4.jpg",
      height: 250,
    },
    {
      id: 5,
      src: "/assets/prom/prom5.jpg",
      height: 250,
    },
    {
      id: 6,
      src: "/assets/prom/prom6.jpg",
      height: 250,
    },
    {
      id: 7,
      src: "/assets/prom/prom7.jpg",
      height: 250,
    },

    {
      id: 9,
      src: "/assets/prom/prom9.jpg",
      height: 250,
    },
    {
      id: 10,
      src: "/assets/prom/prom10.jpg",
      height: 250,
    },
    {
      id: 11,
      src: "/assets/prom/prom11.jpg",
      height: 250,
    },
    {
      id: 12,
      src: "/assets/prom/prom12.jpg",
      height: 250,
    },
    {
      id: 13,
      src: "/assets/prom/prom13.jpg",
      height: 250,
    },
    {
      id: 14,
      src: "/assets/prom/prom14.jpg",
      height: 250,
    },
    {
      id: 15,
      src: "/assets/prom/prom15.jpg",
      height: 250,
    },
    {
      id: 8,
      src: "/assets/prom/prom8.jpg",
      height: 250,
    },
  ];

  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [api, setApi] = React.useState(null);
  const [curr, setCurr] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const prev = () => {
    if (api) {
      api.prev();
      setCurr(api.selectedScrollSnap());
    }
  };

  const next = () => {
    if (api) {
      api.next();
      setCurr(api.selectedScrollSnap());
    }
  };
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurr(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurr(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mt-20">
      {/* Carousel Row  */}
      <div className="mx-auto w-full flex items-center justify-center">
        {/* Prom Image  */}

        <div className="bg-prom-lights bg-cover w-1/3 md:w-1/4 h-[250px] lg:h-[350px] bg-no-repeat bg-center mr-5 ">
          <div className="w-full flex justify-center items-center h-full">
            <h2 className="w-fit mx-[10%] font-primary text-white font-thin text-center p-2 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-95">
              Prom and Homecoming
            </h2>
          </div>
        </div>

        {/* Carousel  */}
        <div className="w-3/5 md:w-2/3">
          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent ref={emblaRef} className="flex items-center">
              {images.map((link, index) => {
                return (
                  <CarouselItem
                    key={link.id}
                    className="basis-2/3 sm:basis-1/2 md:basis-2/5 lg:basis-2/5
                    xl:basis-1/4 flex items-center pr-4"
                  >
                    <div>
                      <Card className="h-[250px] lg:h-[300px]">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            alt="Prom Picture"
                            src={link.src}
                            width={600}
                            height={600}
                            className="h-[200px] lg:h-[250px] w-fit rounded-sm"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Slider Buttons and Dots */}
            <div className="max-lg:hidden w-full mt-3 flex flex-row justify-center items-center gap-10">
              <CarouselPrevious />
              <div>
                Slide {curr} of {count}
                {/* {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={
                      index === selectedIndex
                        ? "transition-all w-2 h-2 bg-white rounded-full p-1"
                        : "rounded-full bg-white w-2 h-2 bg-opacity-50"
                    }
                  />
                ))} */}
              </div>
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PromCarousel;
