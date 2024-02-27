import { Link } from 'react-router-dom';

import { brandLogo, instagramIcon, linkedinIcon, twitterIcon } from '../../public';

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36 bg-neutral-100 pt-24">
            <div className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
                <div className="flex-1 justify-between">
                    <nav className="text-header-gray text-lg md:text-2xl flex flex-col gap-7 md:gap-7">
                        <Link to="/work">Work</Link>
                        <Link to="/service">Services</Link>
                        <Link to="/insights">insights</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/labs">Labs</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>
                <address className="flex-1 flex justify-between flex-col gap-4 not-italic">
                    <div>
                        <p className="font-poppins text-sm text-gray-500 mb-4">WRITE TO US</p>
                        <p className="text-header-gray text-lg md:text-2xl">hello@yumelabs.com</p>
                    </div>
                    <div className="flex gap-5 mt-5 md:mt-0 flex-col">
                        <p className="font-poppins text-sm text-gray-500">ADDRESS</p>
                        <p className="text-header-gray text-lg md:text-2xl">
                            4th Floor, Qubical Coworking Space, Kormanagala Bangalore - 560033 Karnataka, India
                        </p>
                        <p className="text-header-gray text-lg md:text-2xl">+919562332441</p>
                    </div>
                </address>
                <div className="flex-1">
                    <div className="flex md:gap-16 gap-10">
                        <a href="#" target="_blank" className="cursor-pointer w-6 h-6 md:w-9 md:h-8">
                            <img src={`${instagramIcon}`} alt="instagram icon" className="w-full h-full" />
                        </a>
                        <a href="#" target="_blank" className="cursor-pointer w-6 h-6 md:w-9 md:h-8">
                            <img src={`${linkedinIcon}`} alt="linkedin icon" className="w-full h-full" />
                        </a>
                        <a href="#" target="_blank" className="cursor-pointer w-6 h-6 md:w-9 md:h-8">
                            <img src={`${twitterIcon}`} alt="twitter icon" className="w-full h-full" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:justify-between py-14 border-t-2 border-gray-200 mt-16 md:items-center flex-wrap gap-10 font-poppins">
                <Link to="/">
                    <img src={`${brandLogo}`} alt="brand logo" className="h-5 lg:h-6" />
                </Link>
                <div className="flex gap-10 justify-between items-center w-full md:w-auto">
                    <Link to="/privacy-policy" className="text-accent-blue md:text-base sm:text-xs text-xxs">
                        Privacy Policy
                    </Link>
                    <Link to="/terms-of-use" className="text-accent-blue md:text-base sm:text-xs text-xxs">
                        Terms of Use
                    </Link>
                    <Link to="/copyright-yume-labs" className="text-accent-blue md:text-base sm:text-xs text-xxs">
                        Copyright Yume Labs
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
