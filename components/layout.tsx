import { PropsWithChildren, useState, createContext, useEffect } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

export const TransparentContext = createContext({value: false, setValue: (value: boolean) => {}})

export default function Layout({children}: PropsWithChildren<{}>) {
    const [transparency, setTransparency] = useState(true)

    return (
        <TransparentContext.Provider value={{value: transparency, setValue: setTransparency}}>
            <Navbar />
            <main className="min-h-screen flex min-w-screen">{children}</main>
            <Footer />
        </TransparentContext.Provider>
    )
}