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
      className="grid bg-white rounded-md shadow-gray-800"
      style={{ gridTemplateRows: "1.8fr 1fr" }}
    >
      <div className="rounded-t-md" style={{ background: props.bg }} />
      <div className="flex flex-col place-content-center place-items-center px-4">
        <div className="font-semibold text-gray-800 grid-cols-3 w-full grid items-center pb-1">
          <div className="col-start-2 text-center">{props.name}</div>
          <div className="col-start-3 flex flex-row h-3/4 gap-1">
            <FacebookIcon link="" />
            <InstagramIcon link="" />
            <YoutubeIcon link="" />
          </div>
        </div>
        <div className="text-center text-sm pb-2 font-medium text-zinc-800 leading-tight">{props.description}</div>
      </div>
    </div>
  );
  return frame;
}
