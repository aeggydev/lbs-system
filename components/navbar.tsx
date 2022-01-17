interface LinkProps {
    link: string
    text: string
}

function LinkLeft({link, text}: LinkProps) {
    return <a className="" href={link}>{text}</a>
}

export default function Navbar() {
    return <div className="bg-[#2D2D2D] h-16 w-full flex justify-between items-center px-16 text-white text-xl font-semibold absolute">
        <div className="flex gap-16">
            <LinkLeft link="/" text="Domov" />
            <LinkLeft link="/coaches" text="Coachové" />
            <LinkLeft link="/services" text="Služby" />
            <LinkLeft link="/reviews" text="Recenze" />
        </div>
        <div className="bg-[#F65A5A] h-10 flex items-center rounded-sm px-5">
            <a href="/404" className="bg-[#F65A5A]">Kontaktovat</a>
        </div>
    </div>
}