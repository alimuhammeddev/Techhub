import { useEffect } from 'react'
import KeenSlider from "keen-slider";
import styles from '../../style';
import { curve1, man3, quote, woman3 } from '../../assets';

function Feedback () {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
        script.async = true;
    
        const initializeSlider = () => {
          const keenSlider = new KeenSlider(
            "#feedback-keen-slider",
            {
              loop: true,
              slides: {
                origin: "center",
                perView: 1,
                spacing: 16,
              },
              breakpoints: {
                "(min-width: 1024px)": {
                  slides: {
                    origin: "auto",
                    perView: 2,
                    spacing: 32,
                  },
                },
              },
            },
            []
          );
    
          const keenSliderPrevious = document.getElementById(
            "feedback-keen-slider-previous"
          );
          const keenSliderNext = document.getElementById(
            "feedback-keen-slider-next"
          );
    
          keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
          keenSliderNext.addEventListener("click", () => keenSlider.next());
        };
    
        script.onload = initializeSlider;
    
        document.head.appendChild(script);
    
    return () => {
        document.head.removeChild(script);
    };
    }, []);
  return (
    <section>
        <div>
        <div
          className={`${styles.flexCenter} flex justify-center items-center`}
        >
          <div className={`relative text-center lg:text-[40px] text-[20px]`}>
            <h1
              className="text-[#1E1100] mt-10"
              style={{ fontFamily: "public sans", fontWeight: "700" }}
            >
              Student <span className="text-[#20B486]">Feedback</span>
              <div
                style={{ marginTop: "-7px" }}
                className="ml-[45%] md:ml-[45%]"
              >
                <img src={curve1} alt="" />
              </div>
            </h1>
          </div>
        </div>
        <div>
          <p
            className="text-[#1E1E1E] text-center mt-3 lg:text-[20px] text-[13px]"
            style={{ fontFamily: "public sans" }}
          >
            Here are some testimonies from our students about their experiences at Tech Hub 
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:-me-7">
        <div className=" mt-5 lg:col-span-2 lg:mx-0">
          <div id="feedback-keen-slider" className="keen-slider">
            <div className="keen-slider__slide bg-white p-2">
              <div className="bg-white shadow-lg p-5 rounded-xl -ml-1">
                <div className="flex justify-end">
                  <img src={quote} alt="" />
                </div>
                <div className="flex items-center gap-5">
                  <img src={woman3} alt="" />
                  <div className="text-[#1E1100]">
                    <h1 className="lg:text-[24px] text-[15px] font-semibold">Sarah Maleek</h1>
                    <p className='lg:text-base text-[13px]'>Backend Developer</p>
                  </div>
                </div>
                <div className="text-[#363A3D] mt-10 lg:text-base text-[15px]">
                  <h1>The instructors are knowledgeable, experienced, and passionate about their courses. Their expertise shines through in their engaging and informative video lectures.</h1>
                  <h2 className="mt-5">I appreciate the continuous updates and addition of new courses and materials by the online tech school.</h2>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide bg-white p-2">
              <div className="bg-white shadow-lg p-5 rounded-xl">
                <div className="flex justify-end">
                  <img src={quote} alt="" />
                </div>
                <div className="flex items-center gap-5">
                  <img src={man3} alt="" />
                  <div className="text-[#1E1100]">
                    <h1 className="lg:text-[24px] text-[15px] font-semibold">Mackenzie Yoyo</h1>
                    <p className='lg:text-base text-[13px]'>UI-UX Designer</p>
                  </div>
                </div>
                <div className="text-[#363A3D] mt-10 lg:text-base text-[15px]">
                  <h1>I'm grateful for the school's career-focused approach. The courses are designed to bridge the gap between theory and practical application, empowering me to tackle real-world challenges with confidence.</h1>
                  <h2 className="mt-5">I appreciate the networking opportunities offered by the online tech school. I've been able to connect with like-minded people.</h2>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide bg-white p-2">
              <div className="bg-white shadow-lg p-5 rounded-xl">
                <div className="flex justify-end">
                  <img src={quote} alt="" />
                </div>
                <div className="flex items-center gap-5">
                  <img src={woman3} alt="" />
                  <div className="text-[#1E1100]">
                    <h1 className="lg:text-[24px] text-[15px] font-semibold">Sarah Maleek</h1>
                    <p className='lg:text-base text-[13px]'>Backend Developer</p>
                  </div>
                </div>
                <div className="text-[#363A3D] mt-10 lg:text-base text-[15px]">
                  <h1>The instructors are knowledgeable, experienced, and passionate about their courses. Their expertise shines through in their engaging and informative video lectures.</h1>
                  <h2 className="mt-5">I appreciate the continuous updates and addition of new courses and materials by the online tech school.</h2>
                </div>
              </div>
            </div>

            <div className="keen-slider__slide bg-white p-2">
              <div className="bg-[white] shadow-lg p-5 rounded-xl">
                <div className="flex justify-end">
                  <img src={quote} alt="" />
                </div>
                <div className="flex items-center gap-5">
                  <img src={man3} alt="" />
                  <div className="text-[#1E1100]">
                    <h1 className="lg:text-[24px] text-[15px] font-semibold">Mackenzie Yoyo</h1>
                    <p className='lg:text-base text-[13px]'>UI-UX Designer</p>
                  </div>
                </div>
                <div className="text-[#363A3D] mt-10 lg:text-base text-[15px]">
                  <h1>I'm grateful for the school's career-focused approach. The courses are designed to bridge the gap between theory and practical application, empowering me to tackle real-world challenges with confidence.</h1>
                  <h2 className="mt-5">I appreciate the networking opportunities offered by the online tech school. I've been able to connect with like-minded people.</h2>
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
            id="feedback-keen-slider-previous"
            className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-lg"
          >
            {/* Previous button content */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="feedback-keen-slider-next"
            className="rounded-md p-3 text-black bg-[#FFFFFF] transition hover:bg-[#EEA10D] hover:text-white shadow-xl"
          >
            {/* Next button content */}
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

export default Feedback