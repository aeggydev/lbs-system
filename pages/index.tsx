import type { NextPage } from "next";
import About from "../components/page_sections/about";
import NasTeam from "../components/page_sections/nas_team";
import { TeamData } from "../data/NasTeam";
import Services from "../components/page_sections/services";
import Image from "next/image";
import playButton from "../public/playbutton.svg";
import React from "react";

// TODO: Přidat shadow
const Home: NextPage = () => {
  const [showPlayer, setShowPlayer] = React.useState(false);
  const shadowPlayer = (
    <div
      className="fixed left-0 top-0 w-screen h-screen z-50 grid"
      style={{ background: "rgba(0,0,0,0.75)" }}
      onClick={() => setShowPlayer(false)}
    >
      <div
        className="w-1/2 h-1/3 bg-white place-self-center flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div>foobar placeholder</div>
        <video src="" controls className="flex-grow"></video>
      </div>
    </div>
  );

  return (
    <div className="min-w-full min-h-full">
      <div className="grid min-h-screen bg-purple-600 -mt-16">
        <div className="absolute top-1/3 w-48 h-48 place-self-center grid">
          <Image
            src={playButton}
            alt="Play button"
            className="place-self-center cursor-pointer select-none"
            draggable="false"
            onClick={() => setShowPlayer(true)}
          />
          {showPlayer && shadowPlayer}
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
      {/* <About /> */}
      <div
        className="bg-zinc-800 py-9 scroll-m-16 flex flex-col"
        id="coaches"
        style={{ minHeight: "70vh" }}
      >
        <div className="pl-7 text-3xl mb-2 font-bold text-white pb-5 text-center">
          Náš team
        </div>
        <div className="px-12 md:px-48 grid gap-12 items-stretch flex-grow grid-rows-3 md:grid-rows-1 md:grid-cols-3">
          {TeamData.map((x, i) => (
            <NasTeam {...x} key={i} />
          ))}
          <div className="flex items-center">
            <div className="text-white">
              <div className="font-medium">
                Jako naši hlavní vizi máme sjednotit tým, který bude napříč
                oddíly a stane se nejsilnějším v České Republice.
              </div>
              <br />
              Zaručíme pečlivý, rozumný a daty podložený plán, aby zdokonalil
              nejen sportovcův výkon, ale také sportovní rozhled. Zaručíme
              pečlivý, rozumný a daty podložený plán, který nezlepší jen závaží
              na čince či postava, ale také i sportovní rozhled. Můžeme předat
              spoustu důležitých a užitečných informací.
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
