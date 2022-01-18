import { PropsWithChildren } from "react"
import Navbar from "./navbar"

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-16 flex">{children}</main>
        </>
    )
}