import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        // <nav className="bg-aggie flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
        // <div className="flex items-center space-x-2">
        // <Link href={"/"}>
        //     <img
        //         src="https://brandguide.tamu.edu/assets/img/logos/tam-primary-mark-a.png"
        //         alt="My Image"
        //         width={300}
        //         height={300}
        //     />
        // </Link>
        // </div>
        // <div className="flex-grow"></div>
        //     <div className="font-bold text-2xl text-white flex items-center">
        //         <Link href="/" className="cursor-pointer text-lg ml-14">Prof Rate</Link>
        //     </div>
        // <div className="flex-grow"></div>
        // <div className="font-bold text-white">
        //     <Link href="/Search" className="cursor-pointer text-lg">Search</Link>
        // </div>
        // <div className="font-bold text-white">
        //     <Link href="/SignIn" className="cursor-pointer text-lg ml-14">Login</Link>
        // </div>    
        // </nav>

        <div className="navbar bg-aggie text-white">
            <div className="navbar-start bg-aggie flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
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
            </div>

            <div className="navbar-center">
                <Link href="/">
                    <div className="btn btn-ghost normal-case text-3xl">ProfMatch</div>
                </Link>
            </div>
            <div className="navbar-end">

                <Link href="/Search">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </Link>
                <Link href="/SignIn">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </Link>
            </div>
        </div>


    )
}