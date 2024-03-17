"use client";

import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { useDotButton } from "./carousel-dot-buttons";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Title } from "./title";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__number") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
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
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale);
  }, [emblaApi, tweenScale, setTweenFactor, setTweenNodes]);

  return (
    <Container className="embla flex flex-col items-center overflow-hidden bg-muted_foreground py-20">
      <Title>Don&apos;t Take Our Word for It</Title>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="embla__slide max-w-[400px] py-10" key={index}>
              <div className="embla__slide__number flex flex-col gap-3 items-center p-6 py-8 rounded-lg bg-white shadow-lg">
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="text-primary size-5" />
                  ))}
                </div>
                <p className="text-lg text-center">
                  <i>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, praesentium beatae. Harum praesentium cum
                    magnam! Unde, pariatur. Commodi, cupiditate at.
                    Necessitatibus dolorem ipsum totam numquam sed consequuntur
                    veniam cumque ducimus.
                  </i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              className={cn(
                "size-3.5 rounded-full border-2 border-primary",
                index === selectedIndex && "bg-primary"
              )}
              onClick={() => onDotButtonClick(index)}
              key={index}
            ></button>
          ))}
        </div>
      </div>
    </Container>
  );
};
