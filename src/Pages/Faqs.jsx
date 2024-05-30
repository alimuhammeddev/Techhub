import React from 'react'
import { Cta, Frequent, Hero2, Message, Navbar } from '../Components'
import styles from '../style'
import Footer from '../Components/Home/Footer'

const Faqs = () => {
  return (
    <section>
        <div className='bg-[#ffffff] w-full overflow-hidden text-white'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero2 />
            </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <Frequent />
            </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
                <Message />
            </div>
        </div>
        <div className={`bg-[#E9F8F3B3] mt-16 mb-10 pb-10 p-10 ${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
            <Cta />
            </div>
        </div>
        <div className={`bg-white mt-16 pb-10 p-10 ${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
            <Footer />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Faqs