import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

import backgroundGirdLines from '../../../public/images/svg/background-grid-lines.svg';
import ourServices from '/images/png/services-background.png';

import { OurServicesHeadingData, OurServicesData } from '../../constants/data';

gsap.registerPlugin(ScrollTrigger);

const OurServiceSection = () => {
    const textRef = useRef(null);
    const imagesContainerRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            if (textRef.current) {
                const splitText = new SplitType(textRef.current, {
                    types: 'chars,words,lines'
                });

                gsap.from(splitText.chars, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power1.out',
                    stagger: 1,
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        once: true
                    }
                });
            }
        }
    }, []);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) {
            const pin = gsap.fromTo(
                imagesContainerRef.current,
                {
                    translateX: 0
                },
                {
                    translateX: '-190vw',
                    ease: 'none',
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top 12%',
                        end: '2000 top',
                        scrub: 1,
                        pin: true
                    }
                }
            );

            return () => {
                pin.kill();
            };
        }

        return () => {};
    }, []);

    return (
        <>
            <div className="bg-[rgba(245,239,239,0.4)] z-[1] lg:mt-50 lg:pb-25  pb-25  ">
                <div className="overflow-hidden px-[9.5%] py-[100px]">
                    <div className="brightness-[0.1] h-0 relative z-[-1] lg:left-[-34px] lg:top-[5px]  top-[-28px] left-[-36px] ">
                        <img
                            className="lg:opacity-100 lg:scale-x-150 lg:scale-y-[1.16] scale-x-150 scale-y-85"
                            src={backgroundGirdLines}
                            alt="Background grid lines"
                        />
                    </div>
                    <div>
                        <p className="lg:bg-brand-blue lg:w-[200px] lg:text-[white] lg:italic lg:text-[1.75rem] lg:relative lg:leading-[22px] lg:flex lg:justify-center lg:mt-[90px] lg:pl-[15px] lg:pr-2.5 lg:py-1 lg:pb-1 lg:left-0.5 lg:top-[5px] font-serif hidden">
                            {OurServicesHeadingData.titleWeb}
                        </p>
                        <p className="lg:hidden bg-brand-blue w-40 text-white italic mt-24 text-sm pr-2 pl-4 py-1.5 relative top-[-4px] font-serif flex items-center justify-center">
                            {OurServicesHeadingData.titleMobile}
                        </p>
                        <h2
                            ref={textRef}
                            className="lg:text-[3.5rem] lg:max-w-[75%] lg:leading-[56px] lg:font-medium lg:relative lg:mt-[5px] lg:top-3 font-poppins text-4xl mt-[1px]  relative top-1  break-words">
                            {OurServicesHeadingData.subtitle}
                        </h2>
                    </div>
                </div>
            </div>
            <div ref={triggerRef}>
                <div
                    ref={imagesContainerRef}
                    className=" flex lg:flex lg:gap-[30px] lg:z-[1] lg:w-fit lg:ml-[180px] lg:mr-0 lg:my-0 lg:pt-20 overflow-x-scroll w-[unset] m-0 gap-5 pt-10 pb-7 pl-9">
                    {OurServicesData.map((item) => (
                        <div
                            key={item.id}
                            className="flex h-[550px] pt-[0] pr-[5%] pb-[3%] pl-[5%] lg:flex-row lg:flex-nowrap bg-[white] lg:z-[1] lg:pl-[123px] lg:pr-[72px] lg:pt-[60px] lg:pb-[92px] lg:rounded-lg lg:gap-x-80">
                            <div className="lg:self-end lg:mb-[130px] mb-0 p-0 ">
                                <h4 className="lg:text-4xl  lg:font-medium lg:relative lg:pl-0 lg:pr-[180px] lg:py-0 lg:top-[105px] font-poppins text-2xl pr-[180px] py-0 pl-0 top-0">
                                    {item.heading}
                                </h4>
                                <p className="lg:text-[gray] lg:opacity-60 lg:text-2xl lg:font-normal lg:relative lg:max-w-[345px] lg:pt-5 lg:pb-0 lg:px-0 lg:top-[110px] font-roboto py-5 top-0 px-0 max-w-75  text-xl">
                                    {item.description}
                                </p>
                            </div>
                            <div className=" pt-6 pb-6 ">
                                <img
                                    className="lg:max-h-[400px] lg:max-w-[400px]  max-w-[312px] max-h-[256px]"
                                    src={ourServices}
                                    alt="Background grid lines"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurServiceSection;