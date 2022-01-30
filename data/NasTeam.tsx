import one from "../public/NasTeam/1.jpg"
import two from "../public/NasTeam/2.jpg"
import three from "../public/NasTeam/3.jpg"
import four from "../public/NasTeam/4.jpg"

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
    images: [one, two, three, four]
  },
  {
    name: "Jan Bolech",
    description: `Jeho trenérský cíl je zajistit svým klientům co nejlepší výkon v den závodů. Snaží se, aby každý sportovec, se kterým pracuje, získával sebevědomí každý trénink.`,
    descFirst: true,
    bg: "#5AAC53",
    images: [three]
  },
];
