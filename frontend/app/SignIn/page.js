export default function SignIn(){
    return(
<main>
      <div className="flex items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">
          <form action="" method="POST">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="fName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="First Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Last Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                How many guest are you bringing?
              </label>
              <input
                type="number"
                name="guest"
                id="guest"
                placeholder="5"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <div className="flex flex-col space-y-2 p-2">

              <ul className="flex justify-between w-full px-[10px] mb-6">
                <li className="flex justify-center text-sm"><span className="absolute">Not important</span></li>
                <li className="flex justify-center text-sm"><span className="absolute">somewhat important</span></li>
                <li className="flex justify-center text-sm"><span className="absolute">important</span></li>
                <li className="flex justify-center text-sm"><span className="absolute">very important</span></li>
              </ul>
              <input type="range" className="w-full" min="1" max="4" step="1" />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Are you coming to the event?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton2"
                    className="h-5 w-5"
                  />
                  <label
                    for="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#500000] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>






      <div className="flex items-center min-h-screen">
    <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
            <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                <p className="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
            </div>
            <div className="m-7">
                <form action="">
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label for="password" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            <a href="#!" className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div className="mb-6">
                        <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                    </div>
                    <p className="text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#!" className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>
    </main>
    )
}