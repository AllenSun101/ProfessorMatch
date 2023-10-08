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
            Explore our tools!
          </p>
          <div className="mt-8 mb-8">
            
          <Link href="/Trends">
            <button className="bg-aggie hover:bg-[#381717] outline-none text-white btn lg:btn-lg sm:mb-2 sm:mr-9">Find Trends</button>
          </Link>
          <Link href="/Search">
            <button className="bg-gray-500 hover:bg-gray-600 outline-none text-white btn lg:btn-lg sm:mb-2">Find Ratings</button>
          </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-9 mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">How to Use ProfMatch</h2>
          <div className="text-gray-900 text-lg leading-loose">
              <h3 className="text-2xl font-semibold mb-2">Ratings Search</h3>
              <p className="mb-4">
                In the search page, you can enter a course, set your preferences, and then receive personalized
                professor matches in a ranked table. Scores are scaled from zero to five, with a higher score
                indicating a closer match to your rankings.
              </p>
              <p className="mb-4">
                Setting a field to &quot;not important&quot; tells the algorithm to disregard that feature, meaning it 
                will not be utilized in calculating the final professor match scores. 
              </p>
              <p className="mb-4">
                If you set the &quot;has a high grade distribution&quot; property to anything except &quot;not important&quot; and set 
                all other fields to &quot;not important&quot;, you will get rankings based only on GPA. This is useful 
                for comparisons done purely on grading. 
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2">Ratings Trends</h3>
              <p>
                In the trends page, you can enter a course and set preferences to find visualizations detailing
                professor ratings over past semesters. This provides additional insights into shifts, 
                anomalies, and other circumstances. 
              </p>
          </div>
        </section>

        

      </main>

    </div>

  )
}
