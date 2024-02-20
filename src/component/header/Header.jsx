import { useEffect, useState } from 'react';
import headerJSON from '../../data/header.json';
import useWindowResize from '../../utils/windowResizeUtils';

const Header = () => {
    const windowWidth = useWindowResize();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (windowWidth >= 768) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <div className="w-full fixed">
            <div className="flex justify-between p-6 md:p-0 md:py-5 z-50 md:px-16 lg:px-20 xl:px-28 2xl:px-36 items-center bg-white bg-opacity-50 backdrop-blur-md">
                <div className="flex justify-center gap-x-3.5">
                    <img src="/icons/y-logo.svg" alt="YumeLogo" className="w-4 h-6 2xl:w-6 2xl:h-8" />
                    <img
                        src="/icons/yume-labs-logo.svg"
                        alt="YumeLabsLogo"
                        className="w-36 md:w-32 md:h-5 xl:w-44 2xl:h-6 mt-1"
                    />
                </div>

                <div className="flex justify-end items-center md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
                    <div
                        onClick={toggleMenu}
                        className={`flex md:hidden flex-col gap-1 cursor-pointer 
                                 ${isMenuOpen ? 'rotate-45' : ''}`}>
                        <div
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 opacity
                           ${isMenuOpen ? '-rotate-90 translate-y-1.5 ' : 'translate-y-0'}`}></div>
                        <div
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 
                            ${isMenuOpen ? 'opacity-0' : 'translate-y-[5px]'}`}></div>
                        <div
                            className={`
                             
                          w-6 h-[3px] bg-accent-blue transition duration-300 -translate-y-2
                          ${isMenuOpen ? '' : '-translate-y-0'}`}></div>
                    </div>
                    <div className={`hidden md:flex  gap-4`}>
                        {headerJSON.map((link, index) => (
                            <a
                                key={`header-${index}`}
                                className={`md:text-xs lg:text-sm xl:text-base text-header-gray font-normal hover:font-semibold cursor-pointer lg:w-24 2xl:w-28`}>
                                {link.title}
                            </a>
                        ))}
                    </div>
                    <a
                        className="hidden md:flex md:rounded-3xl xl:rounded-5xl bg-brand-blue transition duration-500 ease-in-out font-base focus:font-semibold transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-4 lg:text-xs xl:text-sm text-white px-6 py-3.5
                      ">
                        CONTACT US
                    </a>
                </div>
            </div>
            <div
                className={`bg-white transition-all duration-400 bg-opacity-50 backdrop-blur-md
                         ${
                             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                         } px-9 pt-24 text-center text-3xl text-fade-gray tracking-tight leading-10 gap-6 font-light items-start flex md:hidden flex-col
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