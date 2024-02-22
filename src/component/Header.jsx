import { useEffect, useState } from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';
import YumiLabLogo from '../assets/svg/yumi-labs-logo.svg';
import Hamburger from '../assets/svg/hamburger.svg';
import Cancel from '../assets/svg/cancel.svg';
import AppRoutes from '../appRoutes/AppRoutes.json';

const Header = () => {
    const dimensions = useWindowDimensions();
    const mobileScreen = dimensions.width < 1280;

    const [isOpenHamBurger, setIsOpenHamBurger] = useState(!mobileScreen);

    useEffect(() => {
        setIsOpenHamBurger(!mobileScreen);
    }, [dimensions.width, mobileScreen]);

    const handleToggle = () => {
        setIsOpenHamBurger(!isOpenHamBurger);
    };

    return (
        <div>
            <div className="flex items-center justify-between w-full my-0 px-10 py-9 xl:pt-6 xl:pr-6 xl:pb-7">
                <div className="flex justify-evenly items-end gap-x-6 opacity-100">
                    <img src={YumiLabLogo} alt="Yumi labs icon" className="w-full h-full cursor-pointer md:w-18" />
                </div>

                {mobileScreen ? (
                    <div onClick={handleToggle} className="cursor-pointer">
                        <img
                            src={isOpenHamBurger ? Cancel : Hamburger}
                            alt={isOpenHamBurger ? 'hamburger' : 'Cancel'}
                            height={25}
                            width={25}
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex items-center gap-4 uppercase">
                            {Object.entries(AppRoutes).map(([routeKey, routeValue]) => (
                                <a
                                    key={routeKey}
                                    href={routeValue}
                                    className={`text-header-gray opacity-80 whitespace-nowrap hover:opacity-100 z-20`}>
                                    {routeKey}
                                </a>
                            ))}
                        </div>
                        <div className={`bg-brand-blue text-white px-5 py-3 rounded-[32px] font-family: Poppins`}>
                            <a href={AppRoutes.CONTACTUS}>CONTACT US</a>
                        </div>
                    </div>
                )}
            </div>

            {isOpenHamBurger && mobileScreen && (
                <div className="flex flex-col gap-6 uppercase md:flex md:items-start md:justify-center md:h-[calc(100vh-240px)] md:p-24">
                    {Object.entries(AppRoutes).map(([routeKey, routeValue]) => (
                        <a
                            key={routeKey}
                            href={routeValue}
                            className="text-[#2f3750] opacity-80 whitespace-nowrap hover:opacity-100 z-20">
                            {routeKey}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Header;
