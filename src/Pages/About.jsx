import React from 'react'
import { Choose, Cta, Impact, Navbar, Team, Trust, Welcome } from '../Components'
import styles from '../style'
import Footer from '../Components/Home/Footer'

const About = () => {
  return (
    <section>
      <div className='bg-[#ffffff] w-full overflow-hidden text-white'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`bg-[#E9F8F3] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth} lg:mt-20 mt-7`}>
            <Welcome />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Trust />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Impact />
          </div>
        </div>
        <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Choose />
          </div>
        </div>
        <div className={`bg-[#FEFAF2] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Team />
          </div>
        </div>
        <div className={`bg-[#E9F8F3B3] mt-10 mb-10 pb-10 p-10 ${styles.flexStart} ${styles.paddingX}`}>
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

export default About