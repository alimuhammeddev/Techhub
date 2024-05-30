import React, { useState } from 'react'
import { be, fb, instagram, linkedin, logo, pintrest } from '../../assets';

function Footer () {
    const [email, setEmail] = useState('');

    // Function to handle changes in the email input
    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform any action with the email, such as validation or sending it to a server
        console.log('Submitted email:', email);
        // Reset the email input after submission
        setEmail('');
    };
  return (
    <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div style={{fontFamily: 'public sans'}}>
                <img src={logo} alt="" />
                <h1 className='text-[#1E1100] mt-5'>Contact Us</h1>
                <p className='text-[#6D737A] mt-5'>Call : +234 823 271 3883</p>
                <p className='text-[#6D737A] mt-5'>Hit me up and let's work on your project <br className='sm:block hidden'/> together!</p>
                <h2 className='text-[#1E1100] mt-5'>Email: marveletchie042@gmail.com</h2>
                <div className=' flex items-center gap-3 mt-5'>
                    <img src={fb} alt="" className=' bg-[#FFEDC9] p-2 px-5 rounded-lg'/>
                    <img src={pintrest} alt="" className=' bg-[#FFEDC9] p-2 px-4 rounded-lg'/>
                    <img src={linkedin} alt="" className=' bg-[#FFEDC9] p-2 px-4 rounded-lg'/>
                    <img src={instagram} alt="" className=' bg-[#FFEDC9] p-2 px-4 rounded-lg'/>
                    <img src={be} alt="" className=' bg-[#FFEDC9] p-3 px-4 rounded-lg'/>
                </div>
            </div>

            <div style={{fontFamily: 'public sans'}} className='lg:ml-24'>
              <h1 className='text-[#1E1100] lg:text-[24px] font-[600]'>Explore</h1>
              <ul className='space-y-5 mt-5 text-[#6D737A]'>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Home</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>About</a> </li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Course</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Blog</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Contact</a></li>
              </ul>
            </div>

            <div style={{fontFamily: 'public sans'}} className='lg:ml-10'>
              <h1 className='text-[#1E1100] lg:text-[24px] font-[600]'>Category</h1>
              <ul className='space-y-5 mt-5 text-[#6D737A]'>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Design</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Development</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Marketing</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Data Science</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Data Analysis</a></li>
                  <li><a href="#" className='hover:text-[#EEA10D] transition ease-out duration-500'>Google AI</a></li>
              </ul>
            </div>
            <div style={{fontFamily: 'public sans'}}>
              <h1 className='text-[#1E1100] lg:text-[28px] text-[24px] font-[600]'>Subscribe</h1>
              <p className='text-[#6D737A] mt-5 lg:text-[20px] text-[16px]'>Lorem Ipsum has been them an industry printer took a galley make book.</p>
              <div>
      <label htmlFor="email" className="sr-only">Email</label>
      <div className="relative mt-10">
        <input
          type="email"
          className="w-full rounded-lg border-[#E7E9EB80] bg-[#E7E9EB80] p-4 pe-12 text-sm shadow-sm text-black"
          placeholder="Enter email"/>
          <div className='mt-10'>
          <a href="#" style={{fontFamily: 'public sans', fontWeight: '500', background: '#EEA10D', padding: '10px', borderRadius: '5px'}}className='lg:text-[18px] text-[15px]'>Subscribe Now</a>
        </div>
      </div>
      </div>
      </div>           
    </div>  
    </section>
  )
}

export default Footer