import useWindowDimensions from "../utils/useWindowDimensions";
import {  useState } from "react";
import YumiLabIcon from "../assets/svg/yumeLabsIcon.svg";
import YumiLabLogo from "../assets/svg/yumelabsLogo.svg";
import Hamburger from "../assets/svg/hamburger.svg";
import Cancel from "../assets/svg/cancel.svg";

const Header = () => {
  const dimensions = useWindowDimensions();

  const [isOpenHamBurger, setIsOpenHamBurger] = useState(true);

  const handleToggle = () => {
    setIsOpenHamBurger(!isOpenHamBurger);
  };

  return (
    <>
    <div>
      <div className=' flex items-center justify-between w-full max-w-[1440px] mx-auto my-0 px-10 py-9  xl:pt-6 xl:pr-6 xl:pb-7 '>
        <div className='flex justify-evenly items-end gap-x-6 opacity-100  '>
          <img
            src={YumiLabLogo}
            alt="Yumi labs icon"
            className='w-6 cursor-pointer md:w-18'
          />
          <img
            src={YumiLabIcon}
            alt="Yumi labs icon"
            className='w-[182px] cursor-pointer md:w-36' 
          />
        </div>

        {dimensions.width && dimensions.width > 1440 ? (
          <div className='flex items-center justify-between gap-[68px]'>
            <div className='flex items-center gap-4 uppercase'>
              <a href="#works" className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                WORKS
              </a>
              <a href="#services" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                SERVICES
              </a>
              <a href="#insights" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                INSIGHTS
              </a>
              <a href="#about-us" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                ABOUT US
              </a>
              <a href="#labs" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                LABS
              </a>
            </div>
            <div className= 'overflow-hidden bg-[#0a66ec] text-white not-italic font-normal text-base px-5 py-3 rounded-[32px] font-family: Poppins'>
              <a href="#contact us">CONTACT US</a>
            </div>
          </div>
        ) : (
          <>
            {isOpenHamBurger ? (
              <div onClick={handleToggle} aria-hidden className='fill-[#253F9C]' >
                <img src={Hamburger}  alt="hamburger" height={25} width={25} />
              </div>
            ) : (
              <div onClick={handleToggle} aria-hidden className='fill-[#253F9C]' >
                <img src={Cancel}  alt="cancel" height={25} width={25} />
              </div>
            )}
          </>
        )}
      </div>

      {!isOpenHamBurger && dimensions.width < 1440 && (
        <div className='flex flex-col gap-6 uppercase   md:flex md:items-start md:justify-center md:h-[calc(100vh-240px)] md:p-24'>
        
          <a href="#works" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                WORKS
              </a>
              <a href="#services" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                SERVICES
              </a>
              <a href="#insights" className= 'text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                INSIGHTS
              </a>
              <a href="#about-us" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                ABOUT US
              </a>
              <a href="#labs" className=' text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20'>
                LABS
              </a>
        </div>
      )}
    </div>
    </>
    
  );
  
};

export default Header;
