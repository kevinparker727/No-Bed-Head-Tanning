"use client";

import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import useEmblaCarousel from "embla-carousel-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DotButton, useDotButton } from "./ui/EmblaCarouselDotButton";

import Image from "next/image";

const WeddingCarousel = (props) => {
  const images = [
    {
      id: 1,
      src: "/assets/tan-lines/tanlines1.jpg",
      height: 250,
    },
    {
      id: 2,
      src: "/assets/tan-lines/tanlines2.jpg",
      height: 250,
    },
    {
      id: 3,
      src: "/assets/tan-lines/tanlines3.jpg",
      height: 250,
    },
    {
      id: 4,
      src: "/assets/tan-lines/tanlines4.jpg",
      height: 250,
    },
    {
      id: 5,
      src: "/assets/tan-lines/tanlines5.jpg",
      height: 250,
    },
    {
      id: 6,
      src: "/assets/tan-lines/tanlines6.jpg",
      height: 250,
    },
    {
      id: 7,
      src: "/assets/tan-lines/tanlines7.jpg",
      height: 250,
    },
    {
      id: 8,
      src: "/assets/tan-lines/tanlines8.jpg",
      height: 250,
    },
    {
      id: 9,
      src: "/assets/tan-lines/tanlines9.jpg",
      height: 250,
    },
    {
      id: 10,
      src: "/assets/tan-lines/tanlines10.jpg",
      height: 250,
    },
    {
      id: 11,
      src: "/assets/tan-lines/tanlines11.jpg",
      height: 250,
    },
    {
      id: 12,
      src: "/assets/tan-lines/tanlines12.jpg",
      height: 250,
    },
    {
      id: 13,
      src: "/assets/tan-lines/tanlines13.jpg",
      height: 250,
    },
    {
      id: 14,
      src: "/assets/tan-lines/tanlines14.jpg",
      height: 250,
    },
    {
      id: 15,
      src: "/assets/tan-lines/tanlines15.jpg",
      height: 250,
    },
    {
      id: 16,
      src: "/assets/tan-lines/tanlines16.jpg",
      height: 250,
    },
    {
      id: 17,
      src: "/assets/tan-lines/tanlines17.jpg",
      height: 250,
    },
    {
      id: 18,
      src: "/assets/tan-lines/tanlines18.jpg",
      height: 250,
    },
    {
      id: 19,
      src: "/assets/tan-lines/tanlines19.jpg",
      height: 250,
    },
    {
      id: 20,
      src: "/assets/tan-lines/tanlines20.jpg",
      height: 250,
    },
    {
      id: 21,
      src: "/assets/tan-lines/tanlines21.jpg",
      height: 250,
    },
    {
      id: 22,
      src: "/assets/tan-lines/tanlines22.jpg",
      height: 250,
    },
    {
      id: 23,
      src: "/assets/tan-lines/tanlines23.jpg",
      height: 250,
    },
    {
      id: 24,
      src: "/assets/tan-lines/tanlines24.jpg",
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
    <section>
      {/* Carousel Row  */}
      <div className="mx-auto w-full flex items-center justify-center">
        {/* Prom Image  */}

        <div className="bg-before-and-after bg-cover w-1/3 md:w-1/4 h-[250px] lg:h-[350px] bg-no-repeat bg-center mr-5 ">
          <div className="w-full flex justify-center items-center h-full">
            <h2 className="w-fit mx-[10%] font-primary text-white font-thin text-center p-2 bg-stone-500/50 rounded-2xl drop-shadow-xl backdrop-blur-md opacity-95">
              Before and After
            </h2>
          </div>
        </div>

        {/* Carousel  */}
        <div className="w-3/5 md:w-2/3">
          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent className="flex items-center">
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

export default WeddingCarousel;
