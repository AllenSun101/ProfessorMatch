import axios from 'axios';


async function fetchData(props) {
  console.log(props);
  var data = await axios.get(`http://127.0.0.1:5000/Visualizations_Fetch/${props.course}/${props.feedback}/${props.learn}/${props.expectations}/${props.critical}/${props.diverse}/${props.clear}/${props.grade}`);

  return data.data;
}

async function MapRatings(props) {
  console.log(props);
  if (props.ratings == undefined) {
    return (
      <>
      </>
    )
  }

  return (
    <div>
      <div className="w-full xl:w-8/12 mb-12 px-4 mx-auto mt-24 mb-24">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <h1 className="text-3xl tracking-tight mb-12 text-center">Professor Trends Over Time for {props.course}</h1>

          <div className="block w-full overflow-x-auto">
                {/*Graph instead of table, with widgets*/}
          </div>
        </div>
      </div>
    </div>
  )
}


export default async function Trends(props) {

  console.log(props);

  var results = props.searchParams;
  console.log(results);

  var professorRatings;
  if (results.course != undefined && results.course != '') {
    professorRatings = await fetchData(results);
  }

  console.log(professorRatings);

  return (
    <main className='bg-white'>

      <div className="flex flex-col items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">

          <form>

            <div className="mb-12">
              <label
                className="mb-3 block text-base font-medium text-3xl text-[#07074D]"
              >
                Enter the course name
              </label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="ENGR 102"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <h2 className="text-3xl tracking-tight mb-12 text-center">How important is it that the professor:</h2>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Gives quality feedback
              </label>

              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="feedback" className="w-full" min="0" max="3" step="1" />
              </div>



            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Helps me learn concepts or skills
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="learn" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Has clear expectations
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="expectations" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Facilitates critical thinking
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="critical" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Promotes diverse ideas
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="diverse" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Organizes the course clearly
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="clear" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Has a high grade distribution
              </label>
              <div className="flex flex-col space-y-2 p-2">
                <ul className="flex justify-between w-full px-[10px] mb-6">
                  <li className="flex justify-center text-sm"><span className="absolute">Not Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Somewhat Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Important</span></li>
                  <li className="flex justify-center text-sm"><span className="absolute">Very Important</span></li>
                </ul>
                <input type="range" name="grade" className="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div>
              <input type="submit" value="Submit" className="hover:shadow-form rounded-md bg-[#500000] py-3 px-8 text-center text-base font-semibold text-white outline-none mx-auto" />
            </div>
          </form>
        </div>
      </div>
      <MapRatings ratings={professorRatings} course={results.course} />

    </main>
  )
}