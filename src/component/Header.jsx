import useWindowDimensions from '../utils/useWindowDimensions';
import { useState } from 'react';
import YumiLabIcon from '../assets/svg/yume-labs-icon.svg';
import YumiLabLogo from '../assets/svg/yume-labs-logo.svg';
import Hamburger from '../assets/svg/hamburger.svg';
import Cancel from '../assets/svg/cancel.svg';
import { AppRoutes } from '../appRoutes';

const Header = () => {
    const dimensions = useWindowDimensions();

    const desktopScreen = dimensions.width && dimensions.width > 1280;
    const mobileScreen = dimensions.width && dimensions.width < 1280;

    const [isOpenHamBurger, setIsOpenHamBurger] = useState(true);

    const handleToggle = () => {
        setIsOpenHamBurger(!isOpenHamBurger);
    };

    return (
        <>
            <div>
                <div className=" flex items-center justify-between w-full mx-auto my-0 px-10 py-9  xl:pt-6 xl:pr-6 xl:pb-7 ">
                    <div className="flex justify-evenly items-end gap-x-6 opacity-100  ">
                        <img src={YumiLabLogo} alt="Yumi labs icon" className="w-6 cursor-pointer md:w-18" />
                        <img src={YumiLabIcon} alt="Yumi labs icon" className="w-[45] cursor-pointer md:w-36" />
                    </div>

                    {desktopScreen ? (
                        <div className="flex items-center justify-between gap-x-4">
                            <div className="flex items-center gap-4 uppercase">
                                <a
                                    href={AppRoutes.WORK}
                                    className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                                    WORKS
                                </a>
                                <a
                                    href={AppRoutes.SERVICES}
                                    className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                                    SERVICES
                                </a>
                                <a
                                    href={AppRoutes.INSIGHTS}
                                    className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                                    INSIGHTS
                                </a>
                                <a
                                    href={AppRoutes.ABOUTUS}
                                    className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                                    ABOUT US
                                </a>
                                <a
                                    href={AppRoutes.LABS}
                                    className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                                    LABS
                                </a>
                            </div>
                            <div className="overflow-hidden bg-[#0a66ec] text-white not-italic font-normal text-base px-5 py-3 rounded-[32px] font-family: Poppins">
                                <a href={AppRoutes.CONTACTUS}>CONTACT US</a>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div onClick={handleToggle} aria-hidden className="fill-[#253F9C]">
                                <img
                                    src={isOpenHamBurger ? Hamburger : Cancel}
                                    alt={isOpenHamBurger ? 'hamburger' : 'Cancel'}
                                    height={25}
                                    width={25}
                                />
                            </div>
                        </>
                    )}
                </div>

                {!isOpenHamBurger && mobileScreen && (
                    <div className="flex flex-col gap-6 uppercase   md:flex md:items-start md:justify-center md:h-[calc(100vh-240px)] md:p-24">
                        <a
                            href={AppRoutes.WORK}
                            className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                            WORKS
                        </a>
                        <a
                            href={AppRoutes.SERVICES}
                            className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                            SERVICES
                        </a>
                        <a
                            href={AppRoutes.INSIGHTS}
                            className="text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                            INSIGHTS
                        </a>
                        <a
                            href={AppRoutes.ABOUTUS}
                            className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                            ABOUT US
                        </a>
                        <a
                            href={AppRoutes.LABS}
                            className=" text-[#2f3750] opacity-80 whitespace-nowrap font-base text-base hover:opacity-100 z-20">
                            LABS
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
