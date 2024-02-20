// import { data } from "autoprefixer";
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
    <div className="fixed w-full">
      <div className="flex justify-between p-6 md:p-0 md:py-5 z-50 md:px-16 lg:px-20 xl:px-28 2xl:px-36 items-center bg-white bg-opacity-50 backdrop-blur-md">
          <div className="flex justify-center gap-x-3.5">
            <img src="/src/assets/brand-logo.svg" className="w-4 h-6 2xl:w-6 2xl:h-8" />
            <img src="/src/assets/yume-labs-logo.svg" className="w-36 md:w-30 md:h-5 xl:w-44 2xl:h-6 mt-1"/>
          </div>
          <div className={`hidden md:flex justify-center items-center gap-4`}>
                        {headerJSON.map((link, index) => (
                            <a
                                key={`header-${index}`}
                                className={`md:text-xs lg:text-sm xl:text-base text-[#2F3750] font-normal hover:font-semibold cursor-pointer lg:w-24 2xl:w-28`}>
                                {link.title}
                            </a>
                        ))}
                        <a
                       className="hidden md:flex md:rounded-3xl xl:rounded-[32px] bg-[#0A66EC] transition duration-500 ease-in-out font-base focus:font-semibold transform focus:scale-100 hover:bg-gradient-to-r hover:from-[#0A66EC] hover:to-[#F46997] md:text-[10px] lg:text-xs xl:text-sm text-white px-6 py-3.5 ">
                        CONTACT US
                        </a>
                         
                    </div>
                   
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transform transition-transform duration-500 ease-in-out"
              style={{
                transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              {isMenuOpen ? (
                <span className="text-3xl  text-[#253F9C]">&#10005;</span>
              ) : (
                <span className="text-3xl text-[#253F9C]">&#9776;</span>
              )}
            </button>
          </div>
        </div>
        <div
                className={`bg-white transition-all duration-400 bg-opacity-50 backdrop-blur-md
      ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } px-9 pt-[100px] text-center text-[28px] text-[#828796] tracking-tight leading-[60px] font-light items-start flex md:hidden flex-col
      `}>
                {headerJSON.map((link, index) => (
                    <a key={`menu-${index}`} className={`font-extralight hover:font-medium cursor-pointer`}>
                        {link.title}
                    </a>      
                    ))}
                    </div>
                 </div>
  );
};

export default Header;
