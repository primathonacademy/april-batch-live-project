import { useEffect, useState } from 'react';
import useWindowResize from '../utils/windowResizeUtils';
import headerJSON from '../data/header.json';
import SCREEN_SIZE from '../constants/app-constants';

const Header = () => {
    const windowWidth = useWindowResize();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (windowWidth >= SCREEN_SIZE.MD) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <div className="w-full sticky top-0 bg-white z-50">
            <div className="flex justify-between p-6 md:p-0 md:py-5 md:px-16 lg:px-20 xl:px-28 2xl:px-36 items-center bg-opacity-50 backdrop-blur-md">
                <div>
                    <img src="/icons/brand-logo.svg" alt="Brand logo" className="object-cover h-5 lg:h-6" />
                </div>

                <div className="flex justify-end items-center text-center md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
                    <button
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
                            className={`w-6 h-[3px] bg-accent-blue transition duration-300 -translate-y-2
                            ${isMenuOpen ? '' : '-translate-y-0'}`}></div>
                    </button>
                    <nav className="hidden md:flex  2xl:gap-4">
                        {headerJSON.map((nav, index) => (
                            <a
                                href={nav.link}
                                key={`header-${index}`}
                                className="md:text-xs lg:text-sm xl:text-base uppercase text-header-gray font-normal hover:font-semibold cursor-pointer md:w-16 lg:w-20 xl:w-24 2xl:w-28">
                                {nav.title}
                            </a>
                        ))}
                    </nav>
                    <a
                        href="/contact"
                        className="hidden md:flex md:rounded-3xl xl:rounded-5xl bg-brand-blue transition duration-500 ease-in-out font-base transform focus:scale-100 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink md:text-xs xl:text-sm text-white px-6 py-3.5
                        ">
                        CONTACT US
                    </a>
                </div>
            </div>

            {isMenuOpen && (
                <nav
                    className="flex flex-col -z-10 bg-white transition-all duration-400 bg-opacity-50 backdrop-blur-md
                        px-9 pt-24 text-center text-3xl text-fade-gray tracking-tight leading-10 gap-6 font-light items-start md:hidden h-screen
                        ">
                    {headerJSON.map((nav, index) => (
                        <a
                            href={nav.link}
                            key={`menu-${index}`}
                            className="font-extralight uppercase hover:font-medium cursor-pointer">
                            {nav.title}
                        </a>
                    ))}
                </nav>
            )}
        </div>
    );
};

export default Header;
