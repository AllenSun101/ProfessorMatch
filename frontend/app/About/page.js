export default function About(){
    return(
        <div className="bg-gray-100 min-h-screen">
            
            <main className="container mx-auto p-8">

            <section className="bg-white rounded-lg shadow-lg p-8 mb-8 space-y-6">
                <h2 className="text-3xl font-semibold mb-4">About Us</h2>

                <div className="text-gray-900 text-lg leading-loose">
                    <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
                    <p>
                    Welcome to <span className="text-aggie">ProfMatch</span>, your go-to destination for candid and insightful reviews of professors of Texas A&M. Founded by a group of passionate students, our platform is dedicated to revolutionizing the way students choose their courses and professors. We believe that education is a collaborative effort, and students deserve a platform to report their experiences, helping others make informed decisions about their academic journey.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">What Sets Us Apart?</h3>
                    <p>
                    Unlike other review platforms, we have invested in building a state-of-the-art system that utilizes more accurate and detailed data to more objectively match professors with students&apos; preferences. At the end of each semester, Texas A&M University students are encouraged to provide detailed feedback on their professors and courses through AEFIS evaluations. The high response rate and inclusion of multiple features allow for dynamic personalization of ratings for each student. Further, our intuitive interface simplifies the process of finding the best professors for your courses. Whether you&apos;re planning your upcoming semester or seeking information about your current instructors, we make accessing the right information a breeze.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Key Features</h3>
                    <p>
                    <strong>Search for Courses:</strong> Our user-friendly interface allows you to search for course names and provides you with information about the professors that best fit your preferences for that course. Whether you&apos;re selecting classes for the upcoming semester or just curious about your current instructors, thorough data is accessible and easily interpreted.
                    </p>
                    <p>
                    <strong>Thorough Student Review Data:</strong> Our platform thrives on the categorical feedback of students like you. We use AEFIS student data to provide accurate feedback, giving you an inside look into teaching styles, course content, grading difficulty, and overall classroom experiences.
                    </p>
                    <p>
                    <strong>Preferences and Personalization:</strong> Our algorithm calculates a weighted professor score based on your preferences input, creating unique ratings that are suited to your learning needs.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h3>
                    <p>
                    At <span className="text-aggie">ProfMatch</span>, our mission is to empower students to take control of their education. We believe that accurate data from students about professors and courses can lead to better academic choices and improved learning experiences.
                    </p>
                    <p>
                    We&apos;re dedicated to providing you with the most valuable insights and helping you make the best decisions for your academic journey. Join us today and be part of the <span className="text-aggie">ProfMatch</span> community.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-2">Our Team</h3>
                    <p>
                        Neha Rajganesh
                    </p>
                    <p>
                        Rachitha Shivakumar
                    </p>
                    <p>
                        Allen Sun
                    </p>
                    <p>
                        Randil Wijayananda
                    </p>
                </div>
            </section>

            </main>
        </div>
    )
}