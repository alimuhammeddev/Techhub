import React from 'react'

const Hero2 = () => {
  return (
    <section>
        <div>
            <h1 className=' text-[#1E1100] lg:text-[34px] text-[20px] lg:mt-40 mt-32 text-center'>Frequently Asked Questions</h1>
            <h2 className='lg:text-[24px] text-[16px] text-center text-[#1E1100]'>Have any questions? We are here to assist you</h2>
        </div>
        <div className='mt-5 justify-center mx-auto flex'>
          <div className="relative">
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="lg:w-[486px] rounded-md border-gray-200 py-2.5 pe-10 ps-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 start-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 text-gray-600 hover:text-gray-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>

        </div>
    </section>
  )
}

export default Hero2