import Image from "next/image";

import viktor from "../public/viktor.jpg";
import lukas from "../public/lukas.jpg";
import tomas from "../public/tomas.jpg";
import adela from "../public/adela.jpg";

interface ReviewProps {
  title: JSX.Element;
  text: JSX.Element | string;
  textLong?: JSX.Element | string;
  image: string | StaticImageData;
}
const data: ReviewProps[] = [
  {
    title: (
      <>
        <b>Viktor Hubáček</b>, 17 let, 83 kg - sub junior
      </>
    ),
    text: `“David je trenér, s velkými zkušenostmi a vědomostmi, které má odzkoušené na sobě, tudíž ví co funguje a co ne. David má velmi přátelský a osobní přístup. Soutěžil na mezinárodních závodech, tudíž může poradit i v tomto ohledu, protože mezinárodní závody vypadají úplně jinak, než ty naše české...”`,
    textLong: `David je trenér, s velkými zkušenostmi a vědomostmi, které má odzkoušené na sobě, tudíž ví co funguje a co ne.
    David má velmi přátelský a osobní přístup. Soutěžil na mezinárodních závodech, tudíž může poradit i v tomto ohledu, protože mezinárodní závody vypadají úplně jinak, než ty naše české.
    Můj progress s Davidem:
    Udělali jsme spolu zhruba 85 kg na totálu. Na dřepu jsem se zlepšil ze 155 kg na 190 kg. Na bench pressu jsem se zlepšil ze 125 kg na 147,5 kg a na mrtvém tahu jsem se zlepšil 205 na 232,5. Za tento program vděčím Davidovi, protože bych neudělal takový progress bez zranění. Naučil jsem se nové techniky základních cviku, které jsou důležité, pro zlepšení bez zranění. Doufám že se s Davidem se posunu ještě o hodně dále.
    `,
    image: viktor,
  },
  {
    title: (
      <>
        <b>Lukáš Pipek</b>, 17 let 93 kg - sub junior
      </>
    ),
    text: "Vstřícný trenér, který si dá s obsahem tréninků záležet. Individuálně se mi věnuje již rok a na mém progresu má velký podíl.",
    image: lukas,
  },
  {
    title: (
      <>
        <b>Tomáš Grmolec</b>, 17 let 83 kg - sub junior
      </>
    ),
    text: `“Na Davidovi si nejvíce cením toho, jakou věnuje péči pro svoje svěřence. Když mi něco nebylo, jasné tak mi vždy poradil. Věnuje mi spoustu času. Předal mi spoustu cenných informací. Má spoustu zkušeností a ví, co dělá, dá se věřit jeho plánu a radám...”`,
    textLong: `Na Davidovi si nejvíce cením toho, jakou věnuje péči pro svoje svěřence. Když mi něco nebylo, jasné tak mi vždy poradil. Věnuje mi spoustu času. Předal mi spoustu cenných informací. Má spoustu zkušeností a ví, co dělá, dá se věřit jeho plánu a radám.
    Dává svým klientům velmi pečlivou individuální péči včetně pravidelných hovorů, které jsou jednodušší pro  komunikaci a vysvětlování veškerých otázek či problémů.`,
    image: tomas,
  },
  {
    title: (
      <>
        <b>Adéla Holičová</b>, 19 let - junior
      </>
    ),
    text: `“David je výborný trenér, vždy se na něj můžu spolehnout se vším mně pomůže. Když něco nechápu vše ochotně vysvětlí. Všechno ohledně mých tréninků se mnou konzultuje, dbá na moje zdraví a na to abych se nezranila...”`,
    textLong: `David je výborný trenér, vždy se na něj můžu spolehnout se vším mně pomůže. Když něco nechápu vše ochotně vysvětlí. Všechno ohledně mých tréninků se mnou konzultuje, dbá na moje zdraví a na to abych se nezranila.
    David mě trénuje zhruba půl roku od mého úplného začátku s trojbojem. Kdy jsem o tom skoro nic nevěděla. Vše mi vysvětlil jak tréninky tak stravu a regeneraci. Na začátku jsem dřepovala s 40 kg  a nyní je moje PR 67,5 kg, u bench pressu jsem nezvedla ani osu a momentálně mám PR 32,5 kg a u mrtvého tahu jsem tahala 40 kg se špatnou technikou s kterou mě David hodně pomohl a nyní mám PR 72,5 kg. A takto jsem se posunula díky Davidovi   který se mnou začínal v podstatě od nuly, měl se mnou spoustu trpělivosti, podporoval mě a dělal co je v jeho silách aby mně pomohl se posunout dál. Doufám že mě bude David trénovat i nadále a že se posuneme ještě dál.`,
    image: adela,
  },
];

function Review({ title, text, image, textLong }: ReviewProps) {
  return (
    <div className="text-white font-serif">
      <Image
        alt="Fotka recenzenta"
        src={image}
        width={2048}
        height={1365}
        className="rounded-md"
      />
      <div className="py-2">{title}</div>
      <div className="italic">{text}</div>
      <a href="/review/2">CLICK me</a>
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-[#3D3D3D] min-h-[100vh]">
      <div className="text-center text-white text-3xl">Recenze</div>
      <div className="grid grid-cols-2 p-16 gap-8">
        {data.map((x, i) => (
          <Review {...x} key={i} />
        ))}
      </div>
    </div>
  );
}
