import React from 'react'
import styles from '../../style'
import { curve1 } from '../../assets'

const Welcome = () => {
  return (
    <section>
        <div className={`${styles.flexCenter} flex justify-center items-center`}>
        <div className={`relative text-center lg:text-[40px] text-[20px]`}>
            <h1 className='text-[#1E1100] mt-10' style={{fontFamily: 'public sans',fontWeight: '700'}}>Welcome To <span className='text-[#20B486]'>Tech Hub</span>
            <div className='ml-[55%] md:ml-[55%] -mt-1'>
                <img src={curve1} alt=""/>
            </div>
            </h1>
        </div>
        </div>
        <div style={{fontFamily:'public sans', lineHeight: '24px', fontWeight: '400',}} className='lg:text-[20px] text-[13px]'>
            <p className='text-center text-[#1E1100] mt-5'>Our mission at Tech Hub is to provide a transformative learning experience that goes beyond <br className='sm:block hidden'/> traditional education. We believe in the power of technology to revolutionize industries, solve <br className='sm:block hidden'/> complex problems, and create new opportunities. Through our comprehensive programs and <br className='sm:block hidden'/> expert-led instructors, we prepare our students to become the tech innovators, problem solvers, <br className='sm:block hidden'/> and thought leaders of tomorrow.</p>
            <p className='text-center text-[#1E1100] mt-5'>We are committed to helping our students kickstart their careers in the tech world. Through <br className='sm:block hidden'/> partnerships with leading companies and organizations, we provide internship opportunities, job <br className='sm:block hidden'/> placement assistance, and career development resources.</p>
        </div>
    </section>
  )
}

export default Welcome