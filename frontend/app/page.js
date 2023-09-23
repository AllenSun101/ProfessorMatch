import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white-500 text-black pt-14 pb-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to ProfMatch</h1>
        <p className="text-lg text-gray-800 pt-3">A dynamic, personalized professor matching system.</p>
      </header>

      <main className="container mx-auto p-8">



        <section className="bg-white rounded-lg shadow-lg p-9 mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg text-gray-800 p-3">
            Join our community today! Create an account or sign in to explore
            our website.
          </p>
          <div className="mt-8 mb-8">
            {/* <Link href="/SignUp" className="bg-aggie hover:bg-[#381717] text-white font-semibold px-6 py-6 rounded-xl mr-4 text-xl mr-9">
              Create Account

            </Link>
            <Link href="/SignIn" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-6 rounded-xl text-xl">
              Sign In

            </Link> */}
            
            <Link href="/SignUp">
              <button className="bg-aggie hover:bg-[#381717] outline-none text-white  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mr-9">Create Account</button>
            </Link>
            <Link href="/SignIn">
              <button className="bg-gray-500 hover:bg-gray-600 outline-none text-white  btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign In</button>
            </Link>
          </div>
        </section>

        

      </main>

    </div>

  )
}
