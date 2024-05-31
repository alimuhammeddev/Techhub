import React from 'react'
import styles from '../../style'
import { hero, play } from '../../assets'


const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:mt-28 md:mt-20'>
        <div className={`mt-28`}>
            <h1 style={{fontFamily: 'public sans'}} className='text-[25px] lg:text-[48px] font-bold'>
            Unleash Your <span style={{color: '#EEA10D'}}>Tech Skills</span> <br className='sm:block hidden'/> and Shape the Future <br className='sm:block hidden'/> with <span style={{fontFamily: 'forte', color: '#EEA10D'}}>Tech Hub</span>
            </h1>
            <h2 className={`${styles.paragraph} text-white lg:text-[24px] text-[15px] lg:mt-7`} style={{fontFamily: 'public sans'}}>
            Inspiring Brilliance, Shaping the Tech World
            </h2>
            <div className='flex items-center lg:gap-5 gap-2 lg:mt-8 mt-3'>
                <div>
                    <a href='#' className='text-[#ffffff] lg:text-[16px] text-[13px] font-medium bg-[#EEA10D] p-4 py-3 rounded-lg'>Apply Now</a>
                </div>
                <div className='flex items-center bg-[#1E1E1E]'>
                    <img src={play} className='lg:w-fit w-10' alt="" />
                    <a href="" className='text-[#ffffff] lg:text-[16px] text-[13px] font-medium' >Watch how it works</a>
                </div>
            </div>
        </div>

        <div className='mt-2'>
            <img src={hero} alt=""/>
        </div>
    </section>
  )
}

export default Hero