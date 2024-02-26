import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <div className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
                <div className="flex-1 justify-between">
                    <div className="text-header-gray text-lg md:text-2xl flex flex-col gap-7 md:gap-7">
                        <Link to="/work">Work</Link>
                        <Link to="/service">Services</Link>
                        <Link to="/insights">insights</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/labs">Labs</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-between flex-col gap-4">
                    <div>
                        <p className="font-poppins text-sm text-gray-500 mb-4">WRITE TO US</p>
                        <p className="text-header-gray text-lg md:text-2xl">hello@yumelabs.com</p>
                    </div>
                    <div className="flex gap-5 mt-5 md:mt-0 flex-col">
                        <p className="font-poppins text-sm text-gray-500">ADDRESS</p>
                        <p className="text-header-gray text-lg md:text-2xl">
                            4th Floor, Qubical Coworking Space, Kormanagala Bangalore - 560033 Karnataka, India
                        </p>
                        <p className="text-header-gray text-lg md:text-2xl">+91 9562332441</p>
                    </div>
                </div>
                <div className="flex-1 pr-10">
                    <div className="flex gap-16 ">
                        <a href="#" className="cursor-pointer w-6 h-6 md:w-[36px] md:h-[30]">
                            <img
                                src="../../public/icons/Icon-instagram.svg"
                                alt="instagram icon"
                                className="w-full h-full"
                            />
                        </a>
                        <a href="#" className="cursor-pointer w-6 h-6 md:w-[36px] md:h-[30]">
                            <img
                                src="../../public/icons/Icon-linkedin.svg"
                                alt="linkedin icon"
                                className="w-full h-full"
                            />
                        </a>
                        <a href="#" className="cursor-pointer w-6 h-6 md:w-[36px] md:h-[30]">
                            <img
                                src="../../public/icons/Icon-twitter.svg"
                                alt="twitter icon"
                                className="w-full h-full"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-start md:justify-between pt-20 pb-5 border-t-2 border-gray-200 mt-16 md:items-center flex-wrap gap-10">
                <Link to="/">
                    <img src="../../public/icons/brand-logo.svg" alt="brand logo" />
                </Link>
                <div className="flex gap-10 justify-between items-center w-full md:w-auto">
                    <Link to="/privacy-policy" className="text-accent-blue md:text-base text-xs font-poppins">
                        Privacy Policy
                    </Link>
                    <Link to="/terms-of-use" className="text-accent-blue md:text-base text-xs font-poppins">
                        Terms of Use
                    </Link>
                    <Link to="copyright-yume-labs" className="text-accent-blue md:text-base text-xs font-poppins">
                        Copyright Yume Labs
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
