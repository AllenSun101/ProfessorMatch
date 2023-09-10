import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white-500 text-gray-700 pt-14 pb-4 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Prof Rate</h1>
        <p className="text-lg">Your go-to source for amazing content and services</p>
      </header>

      <main className="container mx-auto p-8">



        <section className="bg-white rounded-lg shadow-lg p-9 mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg text-gray-800 p-3">
            Join our community today! Create an account or sign in to explore
            our website.
          </p>
          <div className="mt-12 mb-8">
            <Link href="/SignUp" className="bg-aggie hover:bg-[#381717] text-white font-semibold px-6 py-6 rounded-xl mr-4 text-xl mr-9">
              Create Account

            </Link>
            <Link href="/SignIn" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-6 rounded-xl text-xl">
              Sign In

            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8 mb-8 space-y-6">
      <h2 className="text-3xl font-semibold mb-4">About Us</h2>

      <div className="text-gray-900 text-lg leading-loose">
        <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
        <p>
          Welcome to <span className="text-aggie">Prof Rate</span>, your go-to destination for candid and insightful reviews of professors of Texas A&M. Founded by a group of passionate students, our platform is dedicated to revolutionizing the way students choose their courses and professors. We believe that education is a collaborative effort, and students deserve a platform to report their experiences, helping others make informed decisions about their academic journey. 
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">What Sets Us Apart?</h3>
        <p>
        Unlike other review platforms, we have invested in building a state-of-the-art system that collects more accurate data. At the end of each semester, we encourage students to provide detailed feedback on their professors and courses. Additionally, our intuitive interface simplifies the process of finding the best professors for your courses. Whether you're planning your upcoming semester or seeking information about your current instructors, we make accessing the right information a breeze.       
         </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Key Features</h3>
        <p>
          <strong>Search for Professors:</strong> Our user-friendly interface allows you to search for course names and provides you with information about the best professors for that course. Whether you're selecting classes for the upcoming semester or just curious about your current instructors, finding the right information is a breeze.
        </p>
        <p>
          <strong>Specific Data Student Reviews:</strong> Our platform thrives on the feedback of students like you. We use student data to provide accurate feedback, giving you an inside look into teaching styles, course content, grading criteria, and overall classroom experiences.
        </p>
        <p>
          <strong>Student Tips:</strong> Discover valuable tips and recommendations from students who have taken similar courses. Learn how to succeed in challenging classes or make the most of your educational experience.
        </p>

        <h3 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h3>
        <p>
          At <span className="text-aggie">Prof Rate</span>, our mission is to empower students to take control of their education. We believe that accurate data from students about professors and courses can lead to better academic choices and improved learning experiences.
        </p>
        <p>
          We're dedicated to providing you with the most valuable insights and helping you make the best decisions for your academic journey. Join us today and be part of the <span className="text-aggie">Prof Rate</span> community.
        </p>
      </div>
    </section>
      </main>
    </div>
  )
}
