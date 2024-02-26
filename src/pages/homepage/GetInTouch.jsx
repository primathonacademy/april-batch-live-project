import { NavLink } from 'react-router-dom';
import rightArrow from '../../assets/homepageassets/right-arrow.svg';
import getInTouchBg from '../../assets/homepageassets/get-in-touch-net.svg';

const GetInTouch = () => {
    return (
        <div className="px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-16 md:py-24 lg:py-32 bg-light-pink">
            <section className="flex flex-col md:flex-row w-full bg-accent-blue p-3 rounded-lg relative">
                <div className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover">
                    <img src={getInTouchBg} alt="get in touch image" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 justify-center xl:items-start py-16 xl:px-32 xl:gap-4 items-center w-full">
                    <p className="font-poppins text-white opacity-80 text-start text-sm sm:text-base lg:text-2xl xl:text-3xl 2xl:text-6xl w-44 sm:w-48 lg:w-64 xl:w-full">
                        Have a dream for a better world?
                    </p>
                    <h2 className="flex justify-center items-start text-6xl xl:text-11xl font-poppins leading-9 xl:leading-tight text-white font-medium w-44 sm:w-48 lg:w-64 xl:w-96">
                        Let us make it real.
                    </h2>
                </div>
                <div className="w-full flex justify-center items-center pt-5 pb-12 md:pb-5">
                    <NavLink
                        to="/service"
                        className="flex items-center justify-between bg-gray-bg-color py-1.5 pr-1.5 pl-9 w-64 h-16 xl:py-10 rounded-full lg:w-80 2xl:w-95 hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-pink-500 relative">
                        <h1 className="text-portfolio-button-color text-xs md:text-base xl:text-xl leading-5 md:leading-6 tracking-widest font-semibold">
                            GET IN TOUCH
                        </h1>
                        <div className="flex items-center justify-center rounded-full w-11 h-11 md:w-12 md:h-12 xl:w-16 xl:h-16 bg-brand-blue hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-pink-500">
                            <img
                                src={rightArrow}
                                alt="right arrow icon"
                                className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6"
                            />
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;
