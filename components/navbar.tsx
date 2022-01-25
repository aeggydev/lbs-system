import Link from "next/link"

interface LinkProps {
    link: string
    text: string
}

function LinkLeft({link, text}: LinkProps) {
    return <Link href={link}>{text}</Link>
}

export default function Navbar() {
    return <div className="bg-[#2D2D2D] h-16 w-full flex justify-between items-center px-16 text-white text-xl font-semibold sticky top-0 z-50">
        <div className="flex gap-16">
            <LinkLeft link="/" text="Domov" />
            <LinkLeft link="#coaches" text="Coachové" />
            <LinkLeft link="#services" text="Služby" />
            <LinkLeft link="/reviews" text="Recenze" />
        </div>
        <div className="bg-[#F65A5A] h-10 flex items-center rounded-sm px-5">
            <Link href="/404">Kontaktovat</Link>
        </div>
    </div>
}