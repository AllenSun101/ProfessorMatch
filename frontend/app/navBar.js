import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav className="bg-aggie flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
        <div className="flex items-center space-x-2">
        <Link href={"/"}>
            <img
                src="https://brandguide.tamu.edu/assets/img/logos/tam-primary-mark-a.png"
                alt="My Image"
                width={300}
                height={300}
            />
        </Link>
        </div>
        <div className="flex-grow"></div>
            <div className="font-bold text-2xl text-white flex items-center">
            <h1 className="text-center">Prof Rate</h1>
        </div>
        <div className="flex-grow"></div>
        <div className="font-bold text-white">
            <Link href="/Search" className="cursor-pointer text-lg">Search</Link>
        </div>
        <div className="font-bold text-white">
            <Link href="/SignIn" className="cursor-pointer text-lg ml-14">Login</Link>
        </div>
        </nav>
    )
}