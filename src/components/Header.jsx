import { useState } from 'react';

import useResizeHandler from '../utils/ResizeHandler';
import { TransitionEaseOut } from '../utils/tailwindConstants';

const NavElements = () => {
    const TITLES = ['work', 'services', 'insights', 'about us', 'labs'];
    return TITLES.map((title, i) => {
        return (
            <li
                key={`index-${i}`}
                className="text-2.5xl text-light-gray font-semibold lg:font-normal hover:lg:font-semibold lg:text-base hover:text-dark-gray">
                <a className={`${TransitionEaseOut} uppercase`} href={title}>
                    {title}
                </a>
            </li>
        );
    });
};

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useResizeHandler(setIsNavOpen);
    return (
        <header className="px-9 p-6 backdrop-blur-18">
            <div className="mx-auto flex justify-between items-center max-w-screen-2xl">
                <a href="/" className="flex gap-4 items-center w-40 h-6 md:w-56  md:h-12 z-10">
                    <img className="w-full h-full " src="./brand-logo.svg" alt="brand logo" />
                </a>
                <nav
                    className={`lg:flex  ${
                        isNavOpen
                            ? 'flex flex-col items-start absolute top-0 pt-6 left-0 bg-white h-navbar-mobile w-full px-9'
                            : 'hidden gap-12 items-center justify-between'
                    }`}>
                    <ul className="flex gap-6 lg:flex-row flex-col mt-40 lg:mt-0 font-sans nav-items">
                        <NavElements />
                    </ul>
                    <a className="hidden lg:block ${TransitionEaseOut} bg-blue-600 text-white py-4 px-8 rounded-4 hover:bg-gradient-to-r hover:from-blue-600 hover:to-rose-400">
                        CONTACT US
                    </a>
                </nav>
                <div className="lg:hidden">
                    <button
                        className="hamburger-icon relative flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer"
                        onClick={toggleNav}>
                        <span
                            className={`w-full h-toggle-span bg-blue-800 ${TransitionEaseOut} ${
                                isNavOpen ? 'rotate-45 translate-x-[6px] translate-y-[8px]' : ''
                            }`}></span>
                        <span
                            className={`w-full h-toggle-span bg-blue-800 ${TransitionEaseOut}  ${
                                isNavOpen ? 'opacity-0' : ''
                            }`}></span>
                        <span
                            className={`w-full h-toggle-span bg-blue-800 ${TransitionEaseOut}  ${
                                isNavOpen ? '-rotate-45 translate-x-[6px] -translate-y-[9px]' : ''
                            }`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
