import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { lock, logo } from "../assets";


const Navbar = () => {
    const Links =[
        {name: "Home",link:"/" },
        {name: "About us", link:"/about" },
        {name: "Courses", link:"/" },
        {name: "FAQs", link:"/faqs" },
        {name: "Contact", link:"/" },
      ];
  
      const navigate = useNavigate();
      const [open,setOpen]=useState(false);
  
      const handleNavigation = (link) => {
        navigate(link);
        setOpen(false); // Close the menu after navigation
      };
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-white lg:py-7 py-5 lg:px-48 px-7'>
            <div className='cursor-pointer lg:-ml-10'>
              <img src={logo} alt="" />
            </div>
            
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden text-black'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] bg-[#ffffff] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'} lg:shadow-none md:shadow-none shadow-md`}>
              {
                Links.map((link, index)=>(
                  <li key={index} className='md:ml-8 text-xl md:my-0 my-7 md:mr-14 lg:mr-5 cursor-pointer'>
                    <a onClick={() => handleNavigation(link.link)} className="text-[#6D737A] text-[16px] hover:text-[#EEA10D] duration-500">{link.name}</a>
                  </li>
                ))
              }
              <div className=" flex items-center gap-5 -mr-10 lg:hidden">
                <a href="#" className="border border-[#EEA10D] text-[#6D737A] flex items-center gap-2 p-2 px-7 rounded-md"><img src={lock} alt="" /> Login</a>
                <a href="#" className="bg-[#EEA10D] text-[#fffffff] flex items-center gap-2 p-2 px-7 rounded-md">Apply Now</a>
              </div>
            </ul>
            <div className=" lg:flex items-center gap-5 -mr-10 hidden">
              <a href="#" className="border border-[#EEA10D] text-[#6D737A] text-[16px] flex items-center gap-2 p-2 px-7 rounded-md"><img src={lock} alt="" /> Login</a>
              <a href="#" className="bg-[#EEA10D] text-[#fffffff] text-[16px] flex items-center gap-2 p-2 px-7 rounded-md">Apply Now</a>
            </div>
      </div>
    </div>
  );
};

const CustomLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className="text-gray-800 hover:text-[#307098] duration-500">
      {children}
    </a>
  );
};
export default Navbar