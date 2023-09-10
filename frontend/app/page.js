import Link from "next/link"

export default function Home(props) {
  return(
    <div className="bg-gray-100 min-h-screen">
    <header className="bg-white-500 text-white py-8 text-center">
      <h1 className="text-4xl font-extrabold">Welcome to My Website</h1>
      <p className="text-lg">Your go-to source for amazing content and services</p>
    </header>

    <main className="container mx-auto p-8">
      <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-800">
          We are passionate about providing you with the best possible experience.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <p className="text-gray-800">
          Join our community today! Create an account or sign in to explore
          our website.
        </p>
        <div className="mt-4">
          <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mr-4">
              Create Account
            
          </Link>
          <Link href="/signin" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md">
              Sign In
       
          </Link>
        </div>
      </section>
    </main>
  </div>
  )
}
