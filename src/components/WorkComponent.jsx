import { Fragment, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { NavLink } from 'react-router-dom';
import imageData from '../assets/image';
import portfolioArrow from '../../public/icons/arrow-blue-circle.svg';
import scrollHandler from '../utils/scrollHandlerUtils';

const WorkComponent = () => {
    const boxRefs = useRef([]);

    useGSAP(() => {
        return scrollHandler(boxRefs);
    }, []);

    return (
        <Fragment>
            <section>
                <div className="px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36 pt-12">
                    <h3 className="italic font-serif font-light text-center mb-2 2xl:mb-3 text-white w-28 md:w-32 lg:w-36 2xl:w-44 text-base md:text-lg 2xl:text-2xl bg-accent-blue">
                        Our Work
                    </h3>
                    <p className="text-3xl text-section-box-heading-color sm:text-4xl font-poppins font-medium 2xl:text-6xl sm:w-4/5 mb-28 sm:mb-32 xl:mb-36 leading-9 md:leading-10 lg:leading-normal 2xl:leading-tighter">
                        Discover brand innovation stories that will inspire you to reimagine the Next for yours.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center bg-white px-9 2xl:px-20">
                    <div
                        ref={(el) => (boxRefs.current[0] = el)}
                        className="flex flex-col md:justify-start w-full box md:w-5/12 md:mx-7 lg:mx-10 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div>
                            <img
                                src={imageData.workImg1.imageUrl}
                                alt={imageData.workImg1.altText}
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                            <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                            <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                        </p>
                        <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                            Simplicontract
                        </h4>
                        <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                    <div className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="w-full md:h-44 lg:h-48 xl:h-60 2xl:h-72"></div>
                        <div ref={(el) => (boxRefs.current[1] = el)}>
                            <div>
                                <img
                                    src={imageData.workImg2.imageUrl}
                                    alt={imageData.workImg2.altText}
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                                <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                                <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                            </p>
                            <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                                Simplicontract
                            </h4>
                            <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>
                    <div
                        ref={(el) => (boxRefs.current[2] = el)}
                        className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div>
                            <img
                                src={imageData.workImg3.imageUrl}
                                alt={imageData.workImg3.altText}
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                            <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                            <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                        </p>
                        <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                            Simplicontract
                        </h4>
                        <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                            Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                            scale through fail-proof design innovation systems.
                        </p>
                    </div>
                    <div className="flex flex-col md:justify-start w-full md:w-5/12 md:mx-7 lg:mx-9 2xl:mx-14 pb-12 sm:pb-16 md:pb-0">
                        <div className="w-full md:h-44 lg:h-48 xl:h-60 2xl:h-72"></div>
                        <div ref={(el) => (boxRefs.current[3] = el)}>
                            <div>
                                <img
                                    src={imageData.workImg4.imageUrl}
                                    alt={imageData.workImg4.altText}
                                    className="object-cover rounded-xl"
                                />
                            </div>
                            <p className="text-xs 2xl:text-base font-poppins font-semibold pt-7 2xl:pt-16">
                                <span className="text-accent-blue 2xl:px-4">#UX/UI</span>
                                <span className="text-accent-blue pl-2 2xl:px-4">#DEVELOPMENT</span>
                            </p>
                            <h4 className="text-section-box-heading-color font-poppins font-medium text-3xl 2xl:text-4xl py-3">
                                Simplicontract
                            </h4>
                            <p className="text-section-box-paragraph-color w-5/6 md:w-3/4 2xl:w-3/5 leading-6 md:leading-5">
                                Yumelabs is a global UI UX Design and Industrial Design agency that helps your business
                                scale through fail-proof design innovation systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex justify-center w-full md:my-10">
                    <NavLink
                        to="/"
                        className="flex items-center justify-between bg-gray-bg-color py-2 pr-2 pl-10 w-64 md:w-72 lg:w-80 2xl:w-95 rounded-full hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-50% hover:to-pink-bg-color">
                        <h1 className="text-portfolio-button-color text-xs md:text-sm xl:text-base font-semibold">
                            EXPORT PORTFOLIO
                        </h1>
                        <div className="flex w-10 h-10 xl:w-14 xl:h-14">
                            <img
                                src={portfolioArrow}
                                alt="forward arrow icon"
                                className="object-fit hover:bg-gradient-to-r hover:from-gray-bg-color hover:from-30% hover:to-pink-bg-color"
                            />
                        </div>
                    </NavLink>
                </div>
            </section>
        </Fragment>
    );
};

export default WorkComponent;
