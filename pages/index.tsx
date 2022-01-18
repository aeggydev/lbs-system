import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-full bg-red-500">
      <div className="grid min-h-full">
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
          <div style={{ WebkitTextStroke: "1.5px black" }} className="text-5xl font-semibold">
            Profesionální coaching
          </div>
        </div>
      </div>
      PLACEHOLDER
    </div>
  );
};

export default Home;
