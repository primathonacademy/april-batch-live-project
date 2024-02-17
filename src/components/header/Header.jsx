import React, { useState, useEffect } from 'react';
const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                setIsNavOpen(false);
            }
        };

        window.addEventListener('resize', checkScreenSize);

        checkScreenSize();

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <header className="px-4 opacity-100 backdrop-blur-18 relative ">
            <div className="container mx-auto p-6 flex justify-between items-center">
                <a href="/" className="flex gap-4 items-center">
                    <div className="w-[17px] h-6 md:w-6 md:h-8 relative z-10">
                        <img className="w-full h-full" src="./logo__1.png" alt="Logo 1" />
                    </div>
                    <div className="w-36 h-5 md:h-6 md:w-[182px] relative z-10">
                        <img className="w-full h-full" src="./logo__2.png" alt="Logo 2" />
                    </div>
                </a>
                <nav
                    className={`lg:flex z-] ${
                        isNavOpen
                            ? 'flex flex-col items-start absolute top-6 bg-white h-screen'
                            : 'hidden gap-12 items-center justify-between'
                    }`}>
                    <ul className="flex gap-12 lg:flex-row flex-col mt-[232px] lg:mt-0 font-sans nav-items">
                        <li className="text-[28px]  text-[#828796] font-semibold lg:font-normal hover:lg:font-semibold lg:text-[16px] hover:text-[#2f3750]">
                            <a className="transition-all duration-200 ease-out" href="/work">
                                WORK
                            </a>
                        </li>
                        <li className="text-[28px] text-[#828796] font-semibold lg:font-normal hover:lg:font-semibold lg:text-[16px] hover:text-[#2f3750]">
                            <a className="transition-all duration-200 ease-out" href="/services">
                                SERVICES
                            </a>
                        </li>
                        <li className="text-[28px] text-[#828796] font-semibold lg:font-normal hover:lg:font-semibold lg:text-[16px] hover:text-[#2f3750]">
                            <a className="transition-all duration-200 ease-out" href="/insights">
                                INSIGHTS
                            </a>
                        </li>
                        <li className="text-[28px] text-[#828796] font-semibold lg:font-normal hover:lg:font-semibold lg:text-[16px] hover:text-[#2f3750]">
                            <a className="transition-all duration-200 ease-out" href="/about">
                                ABOUT US
                            </a>
                        </li>
                        <li className="text-[28px] text-[#828796] font-semibold lg:font-normal hover:lg:font-semibold lg:text-[16px] hover:text-[#2f3750]">
                            <a className="transition-all duration-200 ease-out" href="/labs">
                                LABS
                            </a>
                        </li>
                    </ul>
                    <button className="hidden lg:block transition-all duration-300 bg-[#0A66EC] text-white py-4 px-8 rounded-[32px] hover:bg-gradient-to-r hover:from-[#0A66EC] hover:to-[#F46997]">
                        CONTACT US
                    </button>
                </nav>
                <div className="lg:hidden block">
                    <button
                        id="menu-toggle"
                        className="menu-toggle top-1/2 transform -translate-y-1/2 right-6 h-[3px] w-6 cursor-pointer "
                        onClick={toggleNav}>
                        <span
                            className={`menu-toggle-bar absolute top-1/2 right-0 w-full h-full bg-[#253F9C] rounded transition-all duration-300 ${
                                isNavOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-8px]'
                            }`}></span>
                        <span
                            className={`menu-toggle-bar absolute top-1/2 right-0 w-full h-full bg-[#253F9C] rounded transition-opacity duration-300 ${
                                isNavOpen ? 'opacity-0' : 'opacity-100'
                            }`}></span>
                        <span
                            className={`menu-toggle-bar absolute top-1/2 right-0 w-full h-full bg-[#253F9C] rounded transition-all duration-300 ${
                                isNavOpen ? 'rotate-[-45deg] translate-y-0' : 'translate-y-[8px]'
                            }`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
