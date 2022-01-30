import useEmblaCarousel from "embla-carousel-react";
import { NasTeamProps } from "../../data/NasTeam";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import YoutubeIcon from "../icons/youtube";
import Image from "next/image"


function EmblaSlide(props: {image: StaticImageData, index: number}) {
  const alt = `Fotka ${props.index + 1}`;
  return <div className="embla__slide relative grid items-center" style={{flex: "0 0 100%"}}>
    <Image src={props.image} alt={alt} />
  </div>
}

export default function NasTeam(props: NasTeamProps) {
  const [emblaRef] = useEmblaCarousel({loop: true})
  
  const maxHeight = Math.max(...props.images.map(x => x.height))

  return (
    <div
      className="grid bg-white rounded-md shadow-gray-800 overflow-hidden hover:scale-105 transition-all"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <div className="rounded-t-md bg-zinc-400">
        <div className="embla overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="embla__container flex h-full">
            {props.images.map((x, i) => <EmblaSlide image={x} index={i} key={i} />)}
          </div>
        </div>
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
