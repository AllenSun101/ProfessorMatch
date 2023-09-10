import Image from 'next/image'

export default function Home(props) {
  console.log(props);

  var results = props.searchParams;
  console.log(results);
  
  return (
    <main className='bg-white'>

      <div class="flex flex-col items-center justify-center p-12">

        <div class="mx-auto w-full max-w-[550px]">

          <form>

            <div class="mb-12">
              <label
                for="guest"
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Enter the course name
              </label>
              <input
                type="text"
                name="course"
                id="course"
                placeholder="ENGR 102"
                min="0"
                class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <h2 class="text-2xl tracking-tight mb-12 text-center">How important are each of the following:</h2>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor gives quality feedback
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="feedback" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor helps me learn concepts or skills
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="learn" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor has clear expectations
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="expectations" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor facilitates critical thinking
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="critical" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor promotes diverse ideas
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="diverse" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor organizes course clearly
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="organize" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div class="mb-5">
              <label
                class="mb-3 block text-base font-medium text-[#07074D]"
              >
                Professor has high grade distribution
              </label>
              <div class="flex flex-col space-y-2 p-2">
                <ul class="flex justify-between w-full px-[10px] mb-6">
                  <li class="flex justify-center text-sm"><span class="absolute">Not important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">somewhat important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">important</span></li>
                  <li class="flex justify-center text-sm"><span class="absolute">very important</span></li>
                </ul>
                <input type="range" name="grade" class="w-full" min="0" max="3" step="1" />
              </div>
            </div>

            <div>
                <input type="submit" value="Submit" className="hover:shadow-form rounded-md bg-[#500000] py-3 px-8 text-center text-base font-semibold text-white outline-none mx-auto" />
            </div>
          </form>
        </div>
      </div>

      <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">


            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left">
                      Rank
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left">
                      Professor Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 border-t-0 whitespace-nowrap font-semibold text-left">
                      Rating
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                      1
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                      Name
                    </td>
                    <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3.4
                    </td>
                  </tr>
                  <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      2
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Name
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3.4
                    </td>
                  </tr>
                  <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      3
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Name
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3.4
                    </td>
                  </tr>
                  <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      4
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Name
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3.4
                    </td>
                  </tr>
                  <tr>
                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                      5
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      Name
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      3.4
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
