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
            <div className="bg-[rgba(245,239,239,0.4)] z-[1] xl:mt-50 xl:pb-25 pt-12 pb-25">
                <div className="overflow-hidden px-[9.5%] py-24">
                    <div className="brightness-[0.1] h-0 relative z-[-1] xl:-left-9 xl:-top-px  -top-7 -left-9 ">
                        <img
                            className="xl:opacity-100 xl:scale-x-150 xl:scale-y-[1.16] scale-x-150 scale-y-85"
                            src={backgroundGirdLines}
                            alt="Background grid lines"
                        />
                    </div>
                    <div>
                        <p className="xl:bg-brand-blue xl:w-48 xl:text-[white] xl:italic xl:text-[1.75rem] xl:relative xl:leading-5 xl:flex xl:justify-center xl:mt-24 xl:pl-4 xl:pr-2.5 xl:py-1 xl:pb-1 xl:left-0.5 xl:top-1 font-serif hidden">
                            {OurServicesHeadingData.titleWeb}
                        </p>
                        <p className="xl:hidden bg-brand-blue w-40 text-white italic mt-24 text-sm pr-2 pl-4 py-1.5 relative -top-1 font-serif flex items-center justify-center">
                            {OurServicesHeadingData.titleMobile}
                        </p>
                        <h2
                            ref={textRef}
                            className="xl:text-[3.5rem] xl:max-w-[75%] leading-15 font-medium xl:mt-1 xl:top-3 font-poppins text-4xl mt-px relative top-1 break-words">
                            {OurServicesHeadingData.subtitle}
                        </h2>
                    </div>
                </div>
            </div>
            <div ref={triggerRef}>
                <div
                    ref={imagesContainerRef}
                    className=" flex xl:flex xl:gap-8 xl:z-[1] xl:w-fit xl:ml-44 xl:mr-0 xl:my-0 xl:pt-20 overflow-x-scroll w-[unset] m-0 gap-5 pt-10 pb-7 pl-9 overflow-hidden">
                    {OurServicesData.map((item) => (
                        <div
                            key={item.id}
                            className="flex h-[550px] pt-[0] pr-[5%] pb-[3%] pl-[5%] xl:flex-row xl:flex-nowrap bg-[white] xl:z-[1] xl:pl-32 xl:pr-20 xl:pt-16 xl:pb-24 xl:rounded-xl xl:gap-x-80">
                            <div className="xl:self-end xl:mb-32 mb-0 pt-9 pr-5 ">
                                <h4 className="xl:text-4xl  xl:font-medium xl:relative xl:pl-0 xl:pr-44 xl:py-0 xl:top-28 font-poppins text-2xl pr-44 py-0 pl-0 top-0">
                                    {item.heading}
                                </h4>
                                <p className="xl:text-[gray] xl:opacity-60 xl:text-2xl xl:font-normal xl:relative xl:max-w-80 xl:pt-5 xl:pb-0 xl:px-0 xl:top-28 font-roboto py-5 top-0 px-0 max-w-75  text-xl">
                                    {item.description}
                                </p>
                            </div>
                            <div className=" pt-6 pb-6 ">
                                <img
                                    className="xl:max-h-96 xl:max-w-96 max-w-80 max-h-64"
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
