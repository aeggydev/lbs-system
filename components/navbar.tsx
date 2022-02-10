import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TransparentContext } from "./layout";

interface LinkProps {
  link: string;
  text: string;
}

function LinkLeft({ link, text }: LinkProps) {
  return (
    <div className="hover:underline">
      <Link href={link}>{text}</Link>
    </div>
  );
}

// TODO: Mléčný sklo
// TODO: Logo
// TODO: Hover underline jinou barvou
export default function Navbar() {
  const transparency = useContext(TransparentContext)
  const [onTop, setOnTop] = useState(true)
  useEffect(() => {
    const onScroll = () => {
      setOnTop(window.scrollY < 150);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onTop]);
  
  const bg = onTop && transparency.value ? "md:bg-[#2D2D2D]/[.50] bg-[#2D2D2D]" : "bg-[#2D2D2D]";

  return (
    <div className={`${bg} transition-colors duration-200 h-16 min-w-full grid grid-cols-3 items-center px-4 md:px-16 text-white text-sm md:text-xl font-semibold sticky top-0 z-50`}
      style={{backdropFilter: "blur(10px)"}}>
      <div className="flex gap-3 md:gap-16 col-start-1 col-end-2">
        <LinkLeft link="/" text="Domov" />
        <LinkLeft link="/#coaches" text="Coachové" />
        <LinkLeft link="/#services" text="Služby" />
        <LinkLeft link="/reviews" text="Recenze" />
      </div>
      <div className="col-start-8">
        <div className="bg-[#F65A5A] h-10 grid rounded-sm px-2 md:px-5 place-content-center">
          <Link href="/404">Kontakt</Link>
        </div>
      </div>
    </div>
  );
}
