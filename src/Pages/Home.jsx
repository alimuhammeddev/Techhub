import React from 'react'
import { Categories, Cta, Feedback, Hero, Impact, Navbar, Trust, Welcome } from '../Components'
import styles from '../style'
import Choose from '../Components/Home/Choose'
import Team from '../Components/Home/Team'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <section>
        <div className='bg-[#ffffff] w-full overflow-hidden text-white'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-[#1E1E1E] w-full ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
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
            <div className={`bg-[#E9F8F3] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                <Welcome />
                </div>
            </div>
            <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                <Choose />
                </div>
            </div>
            <div className={`bg-white ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                <Categories />
                </div>
            </div>
            <div className={`bg-[#FEFAF2] mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                <Team />
                </div>
            </div>
            <div className={`bg-white mt-16 mb-10 pb-10 ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Feedback />
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

export default Home