import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import YoutubeIcon from "../icons/youtube";

export const TeamData: NasTeamProps[] = [
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
export default function NasTeam(props: NasTeamProps) {
  const frame = (
    <div
      className="grid bg-white rounded-md w-4/6 shadow-gray-800"
      style={{ gridTemplateRows: "1fr auto" }}
    >
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
