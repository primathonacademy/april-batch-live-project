import { useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useGSAP } from '@gsap/react';
import { gridlineBgImage, technologyImage, theArtPosterImage } from '../../assets';

const TheArt = () => {
    const textRef = useRef(null);
    useGSAP(() => {
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
                        end: 'top 50%',
                        scrub: true,
                        once: true,
                        markers: true
                    }
                });
            }
        }
    }, []);

    const containerRef = useRef(null);
    useGSAP(() => {
        const container = containerRef.current;
        const images = container.querySelectorAll('.image-container');
        gsap.from(images, {
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: container,
                start: 'top center+=100',
                end: 'bottom center',
                scrub: 1,
                once: true
            }
        });
    }, []);

    return (
        <div className="pb-20">
            <div className="relative flex flex-col mt-10">
                <img src={gridlineBgImage} alt="background" className="object-cover" />
                <div className="absolute top-1/3 w-full lg:ml-32 xl:ml-40 ml-7 md:ml-32">
                    <span className="text-dark-blue lg:text-white lg:bg-dark-blue md:text-white md:bg-dark-blue py-2 md:px-12 lg:text-lg xl:text-xl italic font-serif">
                        The Art of the Possible
                    </span>
                    <p className="w-1/2 lg:text-5xl text-2xl md:text-5xl xl:text-6xl mt-4 font-poppins" ref={textRef}>
                        Learn from our time in the trenches innovating for user advocacy.
                    </p>
                </div>
            </div>
            <div className="lg:ml-36 xl:ml-36 ml-4 md:ml-32 mt-32 md:mt-32 lg:mt-0 relative flex">
                <img src={theArtPosterImage} alt="The art poster" className="object-cover r" />
                <div className="absolute lx:top-1/4 md:top-1/4 sm:top-1/5 lg:top-1/4 w-full lg:ml-32 xl:ml-40 ml-4 md:ml-32 flex flex-col justify-center items-start">
                    <span className="text-white py-2 md:px-0 sm:pt-20 lg:text-lg xl:text-xl">
                        /01/News Technology/03 March 2022
                    </span>
                    <p className="w-1/2 lg:text-xl text-sm md:text-xl xl:text-2xl  text-fade-gray">
                        Great Place to Work 2022 Survey:
                    </p>
                    <p className="w-1/2 lg:text-xl text-sm md:text-xl xl:text-2xl text-fade-gray">
                        Vincit is the best place to work in Finland, again!
                    </p>
                </div>
            </div>

            <div
                className="flex overflow-x-auto scrollbar-hide lg:ml-40 xl:ml-44 ml-5 mr-2 md:mr-6 lg:mr-8 xl:mr-12 md:ml-36 gap-4"
                ref={containerRef}>
                <div className="w-full flex flex-shrink-0">
                    <div className="flex flex-no-wrap">
                        <div className="md:w-auto mr-4">
                            <div className="image-container w-80 lg:w-auto">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="bg-light-blue rounded-md"
                                />
                                <div className="mt-2">
                                    <h1 className="font-bold font-poppins text-lg">
                                        /01 / News Technology / 03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-auto mr-4">
                            <div className="image-container w-80 lg:w-auto">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="w-full bg-light-blue rounded-md"
                                />
                                <div className="mt-2">
                                    <h1 className="font-bold font-poppins text-lg">
                                        /01 / News Technology / 03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto">
                            <div className="image-container w-80 lg:w-auto">
                                <img
                                    src={technologyImage}
                                    alt="technology image"
                                    className="bg-light-blue rounded-md"
                                />
                                <div className="mt-2">
                                    <h1 className="font-bold font-poppins text-lg">
                                        /01 / News Technology / 03 March 2022
                                    </h1>
                                    <p className="font-roboto text-header-gray">
                                        Great Place to Work 2022 Survey: Vincit is the best place to work in Finland,
                                        again!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TheArt;
