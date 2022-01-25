import type { NextPage } from "next";
import FacebookIcon from "../components/icons/facebook";
import InstagramIcon from "../components/icons/instagram";
import YoutubeIcon from "../components/icons/youtube";

const Team: NasTeamProps[] = [
  {
    name: "David Lacina",
    description: `David závodí aktivně od roku 2017. Za jeho dlouholetou kariéru nasbíral mnoho zkušeností z jak národních tak i z mezinárodních soutěží, které rád předá dalším sportovcům.`,
    descFirst: false,
    bg: "#A35959",
  },
  {
    name: "Jan Bolech",
    description: `Jeho trenérský cíl je zajistit svým klientům co nejlepší výkon v den závodů. Snaží se, aby každý sportovec, se kterým pracuje, získával sebevědomí každý trénink.`,
    descFirst: true,
    bg: "#5AAC53",
  },
];

interface NasTeamProps {
  description: string;
  name: string;
  descFirst: boolean;
  bg: string;
}
function NasTeam(props: NasTeamProps) {
  const frame = (
    <div className="grid bg-white rounded-md w-4/6 shadow-gray-800" style={{gridTemplateRows: "1fr auto"}}>
      <div className="rounded-t-md" style={{ background: props.bg }} />
      <div className="grid place-items-center px-4">
        <div className="font-semibold text-gray-800 grid-cols-3 w-full grid h-9 items-center">
          <div className="col-start-2 text-center">{props.name}</div>
          <div className="col-start-3 flex flex-row h-3/4 gap-1">
            <FacebookIcon link=""></FacebookIcon>
            <InstagramIcon link=""></InstagramIcon>
            <YoutubeIcon link=""></YoutubeIcon>
          </div>
        </div>
      </div>
    </div>
  );
  const desc = (
    <div className="text-white text-xl grid place-items-center text-left w-4/6">
      {props.description}
    </div>
  );
  return (
    <div className="grid grid-cols-2 h-60 justify-items-center">
      {props.descFirst ? (
        <>
          {desc}
          {frame}
        </>
      ) : (
        <>
          {frame}
          {desc}
        </>
      )}
    </div>
  );
}

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
      <div className="bg-[#2e2b2b] p-6">
        <div className="pl-7 text-2xl mb-5 underline font-bold text-white pb-5">
          Náš team
        </div>
        <div className="px-36 flex flex-col gap-8">
          {Team.map((x, i) => (
            <NasTeam {...x} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
