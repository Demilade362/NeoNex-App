import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="container-lg flex items-center mx-auto p-5 px-10 justify-between lg:shadow sticky top-0 bg-white">
                <Link href={"/"} className="text-2xl text-pretty bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">NeoNex</Link>
                <div className="flex gap-3 items-center hidden lg:flex">
                    <div className="flex gap-3 justify-between">
                        <Link href={"/"} className="hover:text-green-400">Home</Link>
                        <Link href={"about"} className="hover:text-green-400">About</Link>
                        <Link href={"contact"} className="hover:text-green-400">Contact</Link>
                        <Link href={"faq"} className="hover:text-green-400">FAQ</Link>
                        <Link href={"/"} className="hover:text-green-400">WhitePaper</Link>
                    </div>
                    <div className="flex gap-3 items-center">
                        <Link href={"http://127.0.0.1:5500/index.html"} className="button">Participate in Presale</Link>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
            </nav>
        </>
    )
}
