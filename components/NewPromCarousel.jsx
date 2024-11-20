"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./ui/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./ui/EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.15;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const NewPromCarousel = () => {
  const promImages = [
    // {
    //   id: 1,
    //   src: "/assets/prom/prom1.jpg",
    //   height: 250,
    // },
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
    // {
    //   id: 8,
    //   src: "/assets/prom/prom8.jpg",
    //   height: 250,
    // },
    {
      id: 15,
      src: "/assets/prom/prom15.jpg",
      height: 250,
    },
  ];

  //   const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenStyles = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }

              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }
        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);

        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;

        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenStyles(emblaApi);
    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenStyles)
      .on("scroll", tweenStyles)
      .on("slideFocus", tweenStyles);
  }, [emblaApi, tweenStyles, setTweenFactor, setTweenNodes]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {promImages.map((id, index) => (
            <div className="embla__slide" key={index}>
              {/* <Card className="embla__slide">
                <CardContent className="flex aspect-square items-center justify-center p-6"> */}
              <Image
                alt="Prom Picture"
                src={id.src}
                width={600}
                height={600}
                className="embla__slide__number h-[250px] md:h-[300px] w-fit rounded-lg"
              />
              {/* </CardContent>
              </Card> */}
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default NewPromCarousel;
