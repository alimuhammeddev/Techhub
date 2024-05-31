import React, { useEffect } from 'react'
import KeenSlider from 'keen-slider';
import styles from '../../style';
import { curve1, man1, man2, socials, woman1, woman2 } from '../../assets';

function Team () {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
    
        // Load the script asynchronously
        script.async = true;
    
        // Define a function to initialize the slider
        const initializeSlider = () => {
          const keenSlider = new KeenSlider(
            '#keen-slider',
            {
              loop: true,
              slides: {
                origin: 'center',
                perView: 1,
                spacing: 16,
              },
              breakpoints: {
                '(min-width: 1024px)': {
                  slides: {
                    origin: 'auto',
                    perView: 3.5,
                    spacing: 32,
                  },
                },
              },
            },
            []
          );
    
          const keenSliderPrevious = document.getElementById('keen-slider-previous');
          const keenSliderNext = document.getElementById('keen-slider-next');
    
          keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
          keenSliderNext.addEventListener('click', () => keenSlider.next());
        };
    
        // Set the onload event to initialize the slider after the script is loaded
        script.onload = initializeSlider;
    
        // Append the script to the document head
        document.head.appendChild(script);
    
        // Cleanup: Remove the script when the component unmounts
        return () => {
          document.head.removeChild(script);
        };
      }, []); // Empty dependency array ensures the effect runs only once
  return (
    <section>
        <div>
    <div className={`${styles.flexCenter} flex justify-center items-center`}>
        <div className={`relative text-center lg:text-[40px] text-[20px]`}>
            <h1 className='text-[#1E1100] mt-10' style={{fontFamily: 'public sans',fontWeight: '700'}}>Our Best <span className='text-[#20B486]'>Instructors</span>
            <div className='ml-[45%] md:ml-[55%]'>
                <img src={curve1} alt=""/>
            </div>
            </h1>
        </div>
      </div>
        <div>
            <p className='text-[#1E1E1E] text-center mt-3 lg:text-[20px] text-[13px]' style={{fontFamily:'public sans'}}>Our instructors are highly qualified and experienced professionals in their respective <br className='hidden sm:block'/> fields. They possess industry expertise and a passion for teaching, ensuring that you <br className='hidden sm:block'/> receive relevant and practical knowledge throughout your studies.volved over the <br className='hidden sm:block'/> years, sometimes by accident.</p>
        </div>
    </div>
  <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-1">
    <div className="mt-8 lg:col-span-2 lg:mx-0 mx-3 md:mx-40">
      <div id="keen-slider" className="keen-slider">
        <div className="keen-slider__slide">
            <div className='bg-[#ffffff] p-4 rounded-xl' style={{ width: '312px', height: '388px' }}>
                  <img src={woman1} alt="" />
                <div className='mx-auto'>
                  <h1 className='text-black text-center mt-5 lg:text-xl text-base font-semibold' style={{fontFamily: 'public sans'}}>Jacob Jones</h1>
                  <p className='text-[#6D737A] text-center lg:text-base text-[13px]' style={{fontFamily: 'public sans'}}>UI-UX Design Expert</p>
                  <img src={socials} alt="" className='mx-auto mt-2'/>
                </div>
            </div>
        </div>

        <div className="keen-slider__slide">
            <div className='bg-[#ffffff] p-4 rounded-xl' style={{ width: '312px', height: '388px' }}>
                  <img src={man1} alt="" />
                <div className='mx-auto'>
                  <h1 className='text-black text-center mt-5 lg:text-xl text-base font-semibold' style={{fontFamily: 'public sans'}}>Jacob Jones</h1>
                  <p className='text-[#6D737A] text-center lg:text-base text-[13px]' style={{fontFamily: 'public sans'}}>Marketing Expart</p>
                  <img src={socials} alt="" className='justify-center mx-auto mt-2'/>
                </div>
            </div>
        </div>

        <div className="keen-slider__slide">
            <div className='bg-[#ffffff] p-4 rounded-xl' style={{ width: '312px', height: '388px' }}>
                  <img src={man2} alt="" />
                <div className='mx-auto'>
                  <h1 className='text-black text-center mt-5 lg:text-xl text-base font-semibold' style={{fontFamily: 'public sans'}}>Jacob Jones</h1>
                  <p className='text-[#6D737A] text-center lg:text-base text-[13px]' style={{fontFamily: 'public sans'}}>Full-stack Expert</p>
                  <img src={socials} alt="" className='mx-auto mt-2'/>
                </div>
            </div>
        </div>

        <div className="keen-slider__slide">
            <div className='bg-[#ffffff] p-4 rounded-xl' style={{ width: '312px', height: '388px' }}>
                  <img src={woman2} alt="" />
                <div className='mx-auto'>
                  <h1 className='text-black text-center mt-5 lg:text-xl text-base font-semibold' style={{fontFamily: 'public sans'}}>Jacob Jones</h1>
                  <p className='text-[#6D737A] text-center lg:text-base text-[13px]' style={{fontFamily: 'public sans'}}>Photograpy Expert</p>
                  <img src={socials} alt="" className='mx-auto mt-2'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div className="mt- flex gap-4 lg:mt-0 lg:justify-end justify-center">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5 rtl:rotate-180"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-xl"
        >
          <svg
            className="size-5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
    </section>
  )
}

export default Team