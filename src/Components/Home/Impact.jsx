import React from 'react'
import { curve1 } from '../../assets'
import styles from '../../style'

const Impact = () => {
  return (
    <section>
        <div className={`${styles.flexCenter} flex justify-center items-center`}>
            <div className={`relative text-center text-[40px]`}>
                <h1 className='text-[#1E1100] mt-10 lg:text-[40px] text-[20px] font-bold' style={{fontFamily: 'public sans',}}>Impact In <span className='text-[#20B486]'>Numbers</span>
                <div className='ml-[55%] md:ml-[48%] -mt-1'>
                    <img src={curve1} alt="" className='lg:w-[100%] w-[95%]'/>
                </div>
                </h1>
            </div>
        </div>

        <div className='text-[#1E1E1E] text-center mt-5 lg:text-[20px] text-[12px]' style={{fontFamily: 'public sans', lineHeight: '24px', fontWeight: '400'}}>
            <p>We are committed to helping our students kickstart their careers in the tech <br className='sm:block hidden' /> world. Through partnerships with leading companies and organizations, we <br className='sm:block hidden'/> provide internship opportunities, job placement assistance, and career <br className='sm:block hidden'/> development resources.</p>
        </div>

        <div className='grid md:grid-cols-4 grid-cols-2 mx-auto justify-center text-center md:space-y-0 items-center mt-10'>
            <div>
                <h1 style={{background: 'linear-gradient(180.00deg, rgb(238, 161, 13),rgba(238, 161, 13, 0.03))',backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fontWeight: '700',fontFamily: 'public sans'}} className='md:text-[64px] text-[25px]'>100+</h1>
                <p style={{color:'#1E1E1E', fontWeight:'600', fontFamily:'public sans'}} className='md:text-[24px] text-[12px]'>Tech Graduates</p>
            </div>
            <div>
                <h1 style={{background: 'linear-gradient(180.00deg, rgb(238, 161, 13),rgba(238, 161, 13, 0.03))',backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fontWeight: '700',fontFamily: 'public sans'}} className='md:text-[64px] text-[25px]'>7+</h1>
                <p style={{color:'#1E1E1E', fontWeight:'600', fontFamily:'public sans'}} className='md:text-[24px] text-[12px]'>Career Profession</p>
            </div>
            <div>
                <h1 style={{background: 'linear-gradient(180.00deg, rgb(238, 161, 13),rgba(238, 161, 13, 0.03))',backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fontWeight: '700',fontFamily: 'public sans'}} className='md:text-[64px] text-[25px]'>54+</h1>
                <p style={{color:'#1E1E1E', fontWeight:'600', fontFamily:'public sans'}} className='md:text-[24px] text-[12px]'>Course Outline</p>
            </div>
            <div>
                <h1 style={{background: 'linear-gradient(180.00deg, rgb(238, 161, 13),rgba(238, 161, 13, 0.03))',backgroundClip: 'text', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', fontWeight: '700',fontFamily: 'public sans'}} className='md:text-[64px] text-[25px]'>100+</h1>
                <p style={{color:'#1E1E1E', fontWeight:'600', fontFamily:'public sans'}} className='md:text-[24px] text-[12px]'>Expert Instructors</p>
            </div>
        </div>
    </section>
  )
}

export default Impact