export default function Feedback() {
  return (
    <main className="bg-white pb-24">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="py-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Contact Us</h2>
      </div>
      <div className="flex items-center justify-center p-12">

        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://docs.google.com/forms/u/8/d/e/1FAIpQLSee3KgdHEfx50xxreT-FDF86Ri1WZD0s6dYOapOAHdvXG9Hwg/formResponse" method="POST">
            {/* <div className="-mx-3 flex flex-wrap"> */}
            {/* <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
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
              </div> */}

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>
                  <input type="text" name="entry.313788111" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" name="entry.487523422" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>
            </div>

            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="entry.267290630" placeholder="Type here" className="input input-bordered w-full max-w-xl" required/>
              <label className="label">
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
              <textarea name="entry.969741973" className="textarea textarea-bordered h-24" placeholder="Message" required></textarea>
              <label className="label">
              </label>
            </div>

            <button type="submit" className="btn btn-block">submit</button>

            <div className="pb-24"></div>

            {/* <div className="pb-24">
              <button type="submit" className="flex w-full justify-center rounded-md bg-aggie px-8 py-3 text-mm font-semibold leading-6 text-white shadow-sm hover:bg-aggie focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-aggie">Submit</button>
              <div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </main>
  )
}
