import { useEffect, useState } from 'react';
import headerJSON from '../../data/header.json';

const Header = () => {
    const [isChanged, setIsChanged] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setIsChanged(!isChanged);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
                setIsChanged(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full fixed">
            <div className="flex flex-row justify-between p-6 md:p-0  md:py-5 z-50 md:px-16 lg:px-20 xl:px-28 2xl:px-36 items-center  bg-white bg-opacity-50 backdrop-blur-md">
                <div className="flex flex-row justify-center gap-x-3.5">
                    <img src="/icons/y_logo.svg" alt="" className="w-4 h-6 2xl:w-6 2xl:h-8" />
                    <img
                        src="/icons/yume_labs_logo.svg"
                        alt=""
                        className="w-[144px] md:w-[120px] md:h-[20px] xl:w-[180px] 2xl:h-[25px] mt-1"
                    />
                </div>

                <div className="flex flex-row justify-end items-center md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
                    <div
                        onClick={toggleMenu}
                        className={`flex md:hidden flex-col gap-1 cursor-pointer ${isChanged ? 'rotate-45' : ''}`}>
                        <div
                            className={`w-6 h-[3px] bg-[#253F9C] transition duration-300 opacity
            ${isChanged ? '-rotate-90 translate-y-[6px] ' : 'translate-y-0'}`}></div>
                        <div
                            className={`w-6 h-[3px] bg-[#253F9C] transition duration-300 ${
                                isChanged ? 'opacity-0' : 'translate-y-[5px]'
                            }`}></div>
                        <div
                            className={`
              ${isChanged ? '' : '-translate-y-0'}
              w-6 h-[3px] bg-[#253F9C] transition duration-300 -translate-y-2`}></div>
                    </div>
                    <div className={`hidden md:flex flex-row gap-4`}>
                        {headerJSON.map((link, index) => (
                            <button
                                key={`header-${index}`}
                                className={`md:text-xs lg:text-sm xl:text-base text-[#2F3750] ${
                                    link.isBold ? 'hover:font-semibold' : 'font-light'
                                } lg:w-24 2xl:w-28`}>
                                {link.title}
                            </button>
                        ))}
                    </div>
                    <button className="hidden md:flex md:rounded-3xl xl:rounded-[32px] bg-[#0A66EC] transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-r hover:from-[#0A66EC] hover:to-[#F46997] md:text-[10px] lg:text-xs xl:text-sm text-white px-6 py-3.5 ">
                        CONTACT US
                    </button>
                </div>
            </div>
            <div
                className={`bg-white transition-all duration-400 bg-opacity-50 backdrop-blur-md
      ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } px-9 pt-[100px] text-center text-[28px] text-[#2F3750] tracking-tight leading-[60px] items-start flex md:hidden flex-col
      `}>
                {headerJSON.map((link, index) => (
                    <p key={`menu-${index}`} className={`${link.isBold ? 'font-semibold' : ''}`}>
                        {link.title}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Header;
