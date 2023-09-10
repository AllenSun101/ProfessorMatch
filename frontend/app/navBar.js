import Image from 'next/image'

export default function NavBar() {
    return (

        <nav className="bg-aggie flex justify-between px-10 items-center py-2" style={{ height: '90px' }}>
            <div className="flex items-center space-x-2">
                <Image
                    src="https://brandguide.tamu.edu/assets/img/logos/tam-primary-mark-a.png"
                    alt="My Image"
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex items-center space-x-8 font-bold text-white">
                <span className="cursor-pointer text-lg">Search</span>
            </div>
            <div className="flex items-center space-x-8 font-bold text-white">
                <span className="cursor-pointer text-lg">Login</span>
            </div>
        </nav>
    )
}