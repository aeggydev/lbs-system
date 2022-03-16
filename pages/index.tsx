import type { NextPage } from "next";
import About from "../components/page_sections/about";
import NasTeam from "../components/page_sections/nas_team";
import { TeamData } from "../data/NasTeam";
import Services from "../components/page_sections/services";
import React, { useContext } from "react";
import { TransparentContext } from "../components/layout";
import Poster from "../public/poster.jpg"

// TODO: Přidat shadow
const Home: NextPage = () => {
  const transparency = useContext(TransparentContext);
  transparency.setValue(true);

  const [showPlayer, setShowPlayer] = React.useState(false);
  const shadowPlayer = (
    <div
      className="fixed left-0 top-0 w-screen h-screen grid"
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
      <div className="grid md:min-h-screen bg-black -mt-16">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="md:absolute mt-10 md:mt-0 md:top-0 w-full h-full md:object-cover"
          poster={Poster.src}
        >
          <source src="/landing_video.mp4" type="video/mp4"></source>
        </video>
        <div className="justify-self-center self-end text-white text-center pb-16 z-10 hidden md:block">
          <div
            style={{
              fontFamily: "Chakra Petch",
              WebkitTextStroke: "2px black",
            }}
            className="md:text-7xl text-4xl stroke-black stroke-2 md:pb-4 font-bold text-red-500"
          >
            LBs System
          </div>
          <div
            style={{ WebkitTextStroke: "1.5px black" }}
            className="md:text-5xl text-3xl font-semibold"
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
