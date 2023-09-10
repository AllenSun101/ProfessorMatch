import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white-500 text-gray-700 pt-14 pb-4 text-center">
        <h1 className="text-4xl font-extrabold">Welcome to Prof Rate</h1>
        <p className="text-lg">A dynamic, personalized professor matching system.</p>
      </header>

      <main className="container mx-auto p-8">



        <section className="bg-white rounded-lg shadow-lg p-9 mb-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg text-gray-800 p-3">
            Join our community today! Create an account or sign in to explore
            our website.
          </p>
          <div className="mt-8 mb-8">
            <Link href="/SignUp" className="bg-aggie hover:bg-[#381717] text-white font-semibold px-6 py-6 rounded-xl mr-4 text-xl">
              Create Account

            </Link>
            <Link href="/SignIn" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-6 py-6 rounded-xl text-xl">
              Sign In

            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-800">
            Introduction: Welcome to _______, your go-to destination for candid and insightful reviews of professors of Texas A&M. At______, we believe that education is a collaborative effort, and students deserve a platform to report their experiences, helping others make informed decisions about their academic journey.


            What sets us apart?
            Unlike other programs, we created a program that has more accurate data that students are encouraged to fill out at the end of the semester.

            Key Features:
            Search for Professors: Our user-friendly interface allows you to search for course names and report to you the best professors for that course. Whether you're selecting your classes for the upcoming semester or just curious about your current instructors, finding the right information is a breeze.


            Specific Data Student Reviews: Our platform thrives on the feedback of students like you. We use student data to give accurate feedback. Get an inside look into teaching styles, course content, grading criteria, and overall classroom experiences.


            Student Tips: Discover valuable tips and recommendations from students who've taken similar courses. Learn how to succeed in challenging classes or make the most of your educational experience.


            Our Mission:
            At_____, our mission is to empower students to take control of their education. We believe that accurate data from students about professors and courses can lead to better academic choices and improved learning experiences.








          </p>
        </section>
      </main>
    </div>
  )
}
