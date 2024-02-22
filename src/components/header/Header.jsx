import { useEffect, useState } from "react";
import headerJSON from '../../data/header.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };
 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky w-full ">
      <div className="flex justify-between items-center py-4 mx-4">
        <div className="flex gap-2 md:gap-4 lg:gap-8 justify-center items-center">
          <img src="/src/assets/images/yume logo.svg" alt="Logo"/>
        </div>
        <div className="hidden md:flex justify-center items-center gap-4">
          {headerJSON.map((link, index) => (
            <a
              key={`header-${index}`}
              className="md:text-xs lg:text-sm xl:text-base text-header-gray font-normal hover:font-semibold cursor-pointer lg:w-24 2xl:w-28">
              {link.title}
            </a>
          ))}
          <button className="bg-brand-blue text-white rounded-full opacity-1 px-8 py-3 text-opacity-90 hover:bg-gradient-to-r from-brand-blue from-30%  to-brand-pink md:w-[125px] md:h-[30px] md:text-[10px] flex md:justify-center md:items-center lg:w-[150px] lg:h-[40px] lg:text-[12px]">
            <a href="#">CONTACT US</a>
          </button>
        </div>
        <div className="md:hidden">
  <button onClick={toggleMenu} className="text-white focus:outline-none">
    <div className="flex flex-col gap-2 mx-3">
      <div className={`w-8 h-1 bg-accent-blue transition duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2 w-9' : ''}`}></div>
      <div className={`w-8 h-1 bg-accent-blue transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
      <div className={`w-8 h-1 bg-accent-blue transition duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-4 w-9' : ''}`}></div>
    </div>
  </button>
</div>

      </div>
      <div className={`px-4 mt-16 py-7 transition-all duration-300 ease-in ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
        <div className="flex flex-col">
          {isMenuOpen && 
            headerJSON.map((link, index) => (
              <a key={`menu-${index}`} className="font-extralight hover:font-medium cursor-pointer">
                {link.title}
              </a>      
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
