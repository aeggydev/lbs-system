import type { NextPage } from "next";
import About from "../components/page_sections/about";
import NasTeam, { TeamData } from "../components/page_sections/nas_team";
import Services from "../components/page_sections/services";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-full">
      <div className="grid min-h-screen bg-purple-600 -mt-16">
        <div className="absolute top-1/3 bg-gray-600 w-48 h-48 place-self-center rounded-full grid place-items-center select-none text-9xl text-white">
          ▶
        </div>
        <div className="justify-self-center self-end text-white text-center pb-16">
          <div
            style={{
              fontFamily: "Chakra Petch",
              WebkitTextStroke: "2px black",
            }}
            className="text-7xl stroke-black stroke-2 pb-4 font-bold"
          >
            LBs System
          </div>
          <div
            style={{ WebkitTextStroke: "1.5px black" }}
            className="text-5xl font-semibold"
          >
            Profesionální coaching
          </div>
        </div>
      </div>
      <About />
      <div className="bg-zinc-800 p-6 scroll-m-16" id="coaches">
        <div className="pl-7 text-3xl mb-5 font-bold text-white pb-5">
          Náš team
        </div>
        <div className="px-36 flex flex-col gap-8">
          {TeamData.map((x, i) => (
            <NasTeam {...x} key={i} />
          ))}
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
