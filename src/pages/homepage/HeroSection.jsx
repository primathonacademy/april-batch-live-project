import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import _ScrollTrigger from 'gsap/ScrollTrigger';

import heroGrid from '../../assets/HomePage/hero-grid.png';
import playIcon from '../../assets/HomePage/play-icon.svg';
import heroPoster from '../../assets/HomePage/hero-poster.png';

const HeroImage = () => {
    const heroImageDiv = useRef();

    useGSAP(() => {
        gsap.registerPlugin(_ScrollTrigger);
        gsap.to(heroImageDiv.current, {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: heroImageDiv.current,
                start: 'top 56% ',
                end: 'bottom bottom',
                scrub: true
            }
        });
    });

    return (
        <section>
            <div
                style={{
                    clipPath: 'polygon(35% 0%, 35% 80%, 65% 80%, 65% 0%)',
                    backgroundImage: `url(${heroPoster})`
                }}
                ref={heroImageDiv}
                className="md:items-end items-center md:justify-center bg-cover bg-no-repeat rounded-md gsap-animation-hero h-150 w-full overflow-hidden object-cover bg-bottom-left flex bg-center">
                <div className="flex md:flex-row flex-col-reverse md:mb-20 md:items-end w-10/12 mx-auto md:mt-0 mt-56 gap-28 md:gap-0">
                    <div className="flex-1">
                        <h3 className="md:text-5xl lg:text-7.5xl italic  lg:leading-22.5 font-serif text-white  text-5xl leading-10">
                            Dreams
                            <br /> Delivered
                        </h3>
                    </div>
                    <div className="flex items-center gap-8 flex-1 justify-center">
                        <p className="md:text-2xl text-brand-blue hidden md:block">Play Showreel</p>
                        <button className="bg-brand-blue h-16 w-16 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink">
                            <img src={`${playIcon}`} alt="play button" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HeroSection = () => {
    return (
        <>
            <section className="py-24 overflow-x-clip">
                <div className="h-0 relative -top-[66px] md:-top-[95px] -left-[148px] md:-left-[109px]">
                    <img
                        className="h-80 scale-x-[.91] max-w-none md:scale-x-[.96] md:scale-y-[1.7]"
                        src={`${heroGrid}`}
                        alt="hero grid image"
                    />
                </div>

                <div className="flex-col flex items-start md:items-center md:flex-row gap-8">
                    <div className="flex-1">
                        <h2 className="md:text-7.5xl text-4.5xl leading-15 md:leading-22.5 font-[500] tracking-wide mb-3.5 md:mb-6">
                            Simplifying the Next.
                        </h2>
                        <h3 className="font-serif italic md:text-4xl text-lg bg-accent-blue inline px-4 text-white">
                            for Dreamers who do.
                        </h3>
                    </div>
                    <div className="flex-1 ">
                        <p className="md:text-2xl text-lg mt-6 md:mt-0">
                            High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                            trust, and higher media love.
                        </p>
                    </div>
                </div>
            </section>
            <HeroImage />
        </>
    );
};

export default HeroSection;
