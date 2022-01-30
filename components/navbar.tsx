import Link from "next/link"

interface LinkProps {
    link: string
    text: string
}

function LinkLeft({link, text}: LinkProps) {
    return <div className="hover:underline"><Link href={link}>{text}</Link></div>
}

export default function Navbar() {
    return <div className="bg-[#2D2D2D] h-16 min-w-full grid grid-cols-8 items-center px-16 text-white text-xl font-semibold sticky top-0 z-50">
        <div className="flex md:gap-16 col-start-1 col-end-3">
            <LinkLeft link="/" text="Domov" />
            <LinkLeft link="/#coaches" text="Coachové" />
            <LinkLeft link="/#services" text="Služby" />
            <LinkLeft link="/reviews" text="Recenze" />
        </div>
        <div className="bg-[#F65A5A] h-10 grid rounded-sm px-5 col-start-8 place-content-center">
            <Link href="/404">Kontaktovat</Link>
        </div>
    </div>
}