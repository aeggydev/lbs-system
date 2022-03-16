import useEmblaCarousel from "embla-carousel-react";
import { NasTeamProps } from "../../data/NasTeam";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import YoutubeIcon from "../icons/youtube";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface Slide {
  image: StaticImageData;
  index: number;
}
interface Button {
  selected?: boolean;
  enabled?: boolean;
  onClick: () => void;
}
export const DotButton = ({ selected, onClick }: Button) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""} w-12 rounded h-2 bg-lime-300`}
    type="button"
    onClick={onClick}
  />
);

function EmblaCarousel({ slides }: { slides: Slide[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);
  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <>
      <div className="embla w-full h-full relative">
        <div className="embla__viewport h-full w-full" ref={emblaRef}>
          <div className="embla__container h-full w-full flex flex-row">
            {slides.map((val, index) => (
              <div
                className="embla__slide grid items-center h-full w-full"
                key={index}
                style={{ flex: "0 0 100%" }}
              >
                <div className="embla__slide__img h-full relative">
                  <Image
                    src={val.image}
                    alt={"alt"}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="absolute top-1/2 left-4 flex"
          style={{ fill: "#3123f8", opacity: prevBtnEnabled ? "1" : "0.4" }}
          onClick={scrollPrev}
        >
          <svg
            className="embla__button__svg"
            width="30"
            height="30"
            viewBox="137.718 -1.001 366.563 644"
          >
            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
          </svg>
        </div>
        <div
          className="absolute top-1/2 right-4 flex"
          style={{ fill: "#3123f8", opacity: nextBtnEnabled ? "1" : "0.4" }}
          onClick={scrollNext}
        >
          <svg
            className="embla__button__svg"
            width="30"
            height="30"
            viewBox="0 0 238.003 238.003"
          >
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
          </svg>
        </div>
        <div className="embla__dots absolute justify-center bottom-2 w-full flex flex-row gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
      </div>
      
    </>
  );
}
export default function NasTeam(props: NasTeamProps) {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  const maxHeight = Math.max(...props.images.map((x) => x.height));

  return (
    <div
      className="grid bg-white rounded-md shadow-gray-800 overflow-hidden"
      style={{ gridTemplateRows: "1.8fr 1fr" }}
    >
      <div className="rounded-t-md">
        <EmblaCarousel
          slides={props.images.map((x, i) => ({ image: x, index: i }))}
        />
      </div>
      <div className="flex flex-col place-content-center place-items-center px-4">
        <div className="font-semibold text-gray-800 grid-cols-3 w-full grid items-center pb-1">
          <div className="col-start-2 text-center">{props.name}</div>
          <div className="col-start-3 flex flex-row h-3/4 gap-1">
            <FacebookIcon link="" />
            <InstagramIcon link="" />
            <YoutubeIcon link="" />
          </div>
        </div>
        <div className="text-center text-sm pb-2 font-medium text-zinc-800 leading-tight">
          {props.description}
        </div>
      </div>
    </div>
  );
}
