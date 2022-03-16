import davidOne from "../public/NasTeam/david1.jpg"
import davidTwo from "../public/NasTeam/david2.jpg"
import davidThree from "../public/NasTeam/david3.jpg"
import davidFour from "../public/NasTeam/david4.jpg"
import janOne from "../public/NasTeam/jan1.jpg"
import janTwo from "../public/NasTeam/jan2.jpg"
import janThree from "../public/NasTeam/jan3.jpg"

export interface NasTeamProps {
  description: string;
  name: string;
  descFirst: boolean;
  bg: string;
  images: StaticImageData[]
}

export const TeamData: NasTeamProps[] = [
  {
    name: "David Lacina",
    description: `David závodí aktivně od roku 2017. Za jeho dlouholetou kariéru nasbíral mnoho zkušeností z jak národních tak i z mezinárodních soutěží, které rád předá dalším sportovcům.`,
    descFirst: false,
    bg: "#A35959",
    images: [davidOne, davidTwo, davidThree, davidFour]
  },
  {
    name: "Jan Bolech",
    description: `Jeho trenérský cíl je zajistit svým klientům co nejlepší výkon v den závodů. Snaží se, aby každý sportovec, se kterým pracuje, získával sebevědomí každý trénink.`,
    descFirst: true,
    bg: "#5AAC53",
    images: [janOne, janTwo, janThree]
  },
];
