import React from 'react'
import { call } from '../../assets'

const Cta = () => {
  return (
    <section>
        <div className='grid grid-cols-1 md:grid  lg:grid-cols-2 gap-5 items-center'>
            <div>
                <img src={call} alt="" />
            </div>
            <div>
                <h1 className='text-[#1E1100] lg:text-[44px] text-[20px] font-semibold'>Join <span className='text-[#EEA10D]'>World's largest</span> learning platform today</h1>
                <p className='lg:text-[24px] text-[#1E1100] text-[14px] mt-2 font-medium'>Start learning by sending your application</p>
                <div className='mt-5'>
                <a href='#' className='text-[#ffffff] lg:text-[16px] text-[13px] font-medium bg-[#EEA10D] p-4 py-3 rounded-lg'>Apply Now</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Cta