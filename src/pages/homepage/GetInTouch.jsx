import { NavLink } from 'react-router-dom';
import { rightArrow } from '../../assets/index';

const GetInTouch = () => {
    const divElements = Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="h-[80vh] bg-fade-white opacity-20 w-px mr-3"></div>
    ));

    return (
        <div className="px-6 xs:px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36 py-16 md:py-24 lg:py-32 bg-fade-white">
            <section className="flex flex-col md:flex-row w-full bg-accent-blue p-3 rounded-lg md:rounded-xl relative overflow-hidden">
                <div className="absolute left-0 top-28 sm:top-31 lg:top-20 xl:top-39.5 2xl:top-34.5 3xl:top-43.5 flex flex-col gap-11 lg:gap-12.5 xl:gap-16.5 2xl:gap-19.5 3xl:gap-24 w-full border-fade-white opacity-20">
                    <hr />
                    <hr />
                    <hr />
                    <hr className="xl:hidden" />
                </div>
                <div className="absolute top-0 -left-32 2xs:-left-28 xs:-left-20 sm:-left-6 md:left-7 lg:left-8 xl:left-9 2xl:left-10 3xl:left-12 flex items-center gap-2 2xs:gap-3 xs:gap-3 lg:gap-5 xl:gap-6 2xl:gap-7 3xl:gap-9">
                    {divElements}
                </div>
                <div className="flex flex-col gap-1 xl:items-start py-16 xl:py-20 2xl:py-24 3xl:py-32 lg:pl-24 2xl:pl-28 3xl:pl-36 lg:pr-10 md:gap-0 xl:gap-2 2xl:gap-3 3xl:gap-3 items-center w-full relative">
                    <p className="font-poppins text-white opacity-80 lg:self-start text-start text-sm sm:text-base lg:text-2xl xl:text-3xl 3xl:text-4xl w-44 sm:w-48 lg:w-72 xl:w-80 2xl:w-full md:leading-6 lg:leading-8">
                        Have a dream for a better world?
                    </p>
                    <h2 className="flex justify-center lg:justify-start items-start text-4xl lg:text-5xl xl:text-7xl 3xl:text-7.5xl font-poppins leading-tight lg:leading-12.25 xl:leading-16 2xl:leading-18 3xl:leading-tight text-white font-medium w-44 sm:w-48 lg:w-full 3xl:w-137.5 2xl:w-5/6">
                        Let us make it real.
                    </h2>
                </div>
                <div className="w-full flex justify-center items-center pt-5 pb-12 md:pb-5 z-10">
                    <NavLink
                        to="/service"
                        className="flex items-center justify-center cursor-pointer gap-8 2xs:gap-10 xs:gap-14 sm:gap-16 2xl:gap-20 py-1 xs:py-1.5 xl:py-2 pl-5 xs:pl-7 2xs:pl-5 xl:pl-10 bg-gray-bg-color rounded-full hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-brand-pink">
                        <h1 className="text-accent-blue text-xs sm:text-sm md:text-base xl:text-xl leading-5 md:leading-6 tracking-wide xs:tracking-wider xl:tracking-widest font-semibold">
                            GET IN TOUCH
                        </h1>
                        <div className="flex items-center justify-center rounded-full p-2.5 2xs:p-3.5 sm:p-4 xl:p-6 mr-1 xs:mr-1.5 xl:mr-2 bg-brand-blue hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-brand-pink">
                            <img src={rightArrow} alt="right arrow icon" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                    </NavLink>
                </div>
            </section>
        </div>
    );
};

export default GetInTouch;
