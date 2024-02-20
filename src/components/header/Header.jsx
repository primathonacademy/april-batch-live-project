import { useState } from 'react';
import useResizeHandler from '../../utils/ResizeHandler';
import logoFirst from '../../assets/logo/brand-logo-1.png';
import logoSecond from '../../assets/logo/brand-logo-2.png';
import { TransitionEaseOut } from '../../utils/tailwindConstants';
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useResizeHandler(setIsNavOpen);
    return (
        <header className="px-4 opacity-100 backdrop-blur-18 relative">
            <div className="container mx-auto p-6 flex justify-between items-center relative">
                <a href="/" className="flex gap-4 items-center">
                    <div className="w-4 h-6 md:w-6 md:h-8 relative z-10">
                        <img className="w-full h-full" src={logoFirst} alt="brand-logo" />
                    </div>
                    <div className="w-36 h-5 md:h-6 md:w-44 relative z-10">
                        <img className="w-full h-full" src={logoSecond} alt="brand-logo" />
                    </div>
                </a>
                <nav
                    className={`lg:flex  ${
                        isNavOpen
                            ? 'flex flex-col items-start absolute top-6 bg-white h-screen'
                            : 'hidden gap-12 items-center justify-between'
                    }`}>
                    <ul className="flex gap-12 lg:flex-row flex-col mt-56 lg:mt-0 font-sans nav-items">
                        <li className="text-7  text-normal font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-hover">
                            <a className="transition-all duration-200 ease-out" href="/work">
                                WORK
                            </a>
                        </li>
                        <li className="text-7 text-normal font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-hover">
                            <a className="transition-all duration-200 ease-out" href="/services">
                                SERVICES
                            </a>
                        </li>
                        <li className="text-7 text-normal font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-hover">
                            <a className="transition-all duration-200 ease-out" href="/insights">
                                INSIGHTS
                            </a>
                        </li>
                        <li className="text-7 text-normal font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-hover">
                            <a className="transition-all duration-200 ease-out" href="/about">
                                ABOUT US
                            </a>
                        </li>
                        <li className="text-7 text-normal font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-hover">
                            <a className="transition-all duration-200 ease-out" href="/labs">
                                LABS
                            </a>
                        </li>
                    </ul>
                    <a className="hidden lg:block ${TransitionEaseOut} bg-blue-600 text-white py-4 px-8 rounded-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-rose-400">
                        CONTACT US
                    </a>
                </nav>
                <div className="lg:hidden block">
                    <button
                        className="hamburger-icon relative flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer"
                        onClick={toggleNav}>
                        <span
                            className={`w-full h-1 bg-blue-800 ${TransitionEaseOut} ${
                                isNavOpen ? 'rotate-45 translate-x-[6px] translate-y-[5px]' : ''
                            }`}></span>
                        <span
                            className={`w-full h-1 bg-blue-800 ${TransitionEaseOut}  ${
                                isNavOpen ? 'opacity-0' : ''
                            }`}></span>
                        <span
                            className={`w-full h-1 bg-blue-800 ${TransitionEaseOut}  ${
                                isNavOpen ? '-rotate-45 translate-x-[6px] -translate-y-[10px]' : ''
                            }`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
