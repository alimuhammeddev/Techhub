import React from 'react'
import { airbnb, amazon, facebook, google, grab, netflix } from '../../assets'

const Trust = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#111111] text-center mt-10 lg:text-[28px] font-bold'>Trusted by 5,000+ Companies Worldwide</h1>
        </div>
        <div className='flex items-center lg:gap-16 gap-5 lg:flex-row md:flex-col flex-col mt-5'>
            <img src={google} className='lg:w-fit w-20' alt="" />
            <img src={netflix} className='lg:w-fit w-20' alt="" />
            <img src={airbnb} className='lg:w-fit w-20' alt="" />
            <img src={amazon} className='lg:mt-5 lg:w-fit w-20' alt="" />
            <img src={facebook} className='lg:w-fit w-20' alt="" />
            <img src={grab} className='lg:w-fit w-20' alt="" />
        </div>
    </section>
  )
}

export default Trust