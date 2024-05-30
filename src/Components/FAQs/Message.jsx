import React from 'react'

const Message = () => {
  return (
    <section className=' mt-10'>
        <div>
            <h1 className='text-[#0D1F2D] text-center lg:text-[34px] font-semibold'>Have a different <span className='text-[#59CD90]'>question?</span></h1>
            <p className='text-[#4A5762] lg:text-[24px] text-[15px] text-center'>Personal service is one of the things we pride ourselves on most. If you have other questions you can send us a message below.</p>
        </div>

        <div className='grid place-items-center mt-5'>
            <div className="relative">
                <input
                    type="email"
                    id="UserEmail"
                    placeholder="Enter your email address"
                    className="lg:w-[587px] placeholder:text-[13px] p-3 border border-[#DAD2D2] rounded-md pe-10 shadow-sm sm:text-sm"
                />
            </div>
            <div className='mt-3'>
                <textarea
                    id="OrderNotes"
                    className="mt-2 lg:w-[587px] w-[250px] placeholder:text-[13px] p-3 rounded-lg border border-[#DAD2D2] align-top shadow-sm sm:text-sm"
                    rows="10"
                    placeholder="Your Message"
                ></textarea>
            </div>
        </div>
        <div>
        <div class="mt-7 mx-auto flex justify-center items-center">
            <a class="text-[#ffffff] bg-[#F8931C] p-3 rounded-md text-center text-[13px] md:text-sm lg:text-[16px] lg:w-[587px] w-[250px]" href="#">Send Message</a>
        </div>
        </div>
    </section>
  )
}

export default Message