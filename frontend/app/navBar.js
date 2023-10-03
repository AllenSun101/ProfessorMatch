import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (

        <div className="navbar bg-aggie text-white">
            <div className="navbar-start bg-aggie flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
                <div className="flex items-center space-x-2">
                    <Link href={"/"}>
                        <Image
                            src="https://brandguide.tamu.edu/assets/img/logos/tam-primary-mark-a.png"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                    </Link>
                </div>
            </div>

            <div className="navbar-center">
                <Link href="/">
                    <div className="btn btn-ghost normal-case text-3xl">ProfMatch</div>
                </Link>
            </div>

            <div className="navbar-end space-x-4">
                <Link className="px-4 py-2" href="/About">About</Link>
                <Link className="px-4 py-2" href="/Search">Search</Link>
                <Link className="px-4 py-2" href="/Trends">Trends</Link>
                <Link className="px-4 py-2" href="/Feedback">Contact</Link>
            </div>
        </div>


    )
}