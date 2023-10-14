import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {

    return (
        <div className="navbar bg-aggie text-white">
            <div className="navbar-start bg-aggie flex justify-between px-10 items-center py-2"
                 style={{height: '90px'}}>
                <div className="flex items-center space-x-2">
                    <Link href={"/"}>
                        <div className="logo-image">
                            <Image
                                src="https://brandguide.tamu.edu/assets/img/logos/tam-primary-mark-a.png"
                                alt="My Image"
                                width={300}
                                height={300}
                            />
                        </div>
                    </Link>
                </div>
            </div>

            <div className="navbar-center">
                <Link href="/">
                    <div className="btn btn-ghost normal-case text-3xl">ProfMatch</div>
                </Link>
            </div>

            <div className="navbar-end space-x-4 md:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h7"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="text-black menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-72 text-lg mt-4">
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Search">Search</Link></li>
                        <li><Link href="/Trends">Trends</Link></li>
                        <li><Link href="/Feedback">Contact</Link></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end space-x-4 hidden md:flex">
                <Link className="px-4 py-2" href="/About">About</Link>
                <Link className="px-4 py-2" href="/Search">Search</Link>
                <Link className="px-4 py-2" href="/Trends">Trends</Link>
                <Link className="px-4 py-2" href="/Feedback">Contact</Link>
            </div>
        </div>
    )
}
