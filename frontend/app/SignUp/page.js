export default function SignIn() {
  return (
    <main className="bg-white pb-24">

      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="py-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
      </div>
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
                Username
              </label>
              <input
                type="text"
                name="uName"
                id="uName"
                placeholder="username"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <div className="mb-5">
              <label
                for="guest"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Password
              </label>
              <input
                type="password"
                name="pword"
                id="pword"
                placeholder="password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#500000] focus:shadow-md"
              />
            </div>

            <div className="pb-24">
              <button type="submit" class="flex w-full justify-center rounded-md bg-aggie px-8 py-3 text-mm font-semibold leading-6 text-white shadow-sm hover:bg-aggie focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-aggie">Sign Up</button>
              <div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}