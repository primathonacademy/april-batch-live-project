import React, { useState } from 'react';
import { SLIDES } from '../../constants/app-constant';
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import { LeftBtn, RightBtn, custimage1, custloveicon, gridimage } from '../../assets';

const Customerlove = () => {
    const textRef = useRef(null);
    useEffect(() => {
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
    }, []);

    const [currentindex, Setcureentindex] = useState(0);

    const prevSlide = () => {
        const isFirstslide = currentindex === 0;
        const newIndex = isFirstslide ? 0 : currentindex - 1;
        Setcureentindex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentindex === SLIDES.length - 1;
        const newIndex = isLastSlide ? SLIDES.length - 1 : currentindex + 1;
        Setcureentindex(newIndex);
    };
    return (
        <section>
            {/* Background gridimage */}
            <div className="hidden lg:block lg:relative lg:h-0 lg:top-[-107px] lg:left-[-116px]">
                <img src={gridimage} alt="Grid image" className="md:w-full md:h-96"/>
            </div>

            <div className="CustomerLove bg-transparent md:bg-accent-blue w-32 md:w-64">
                <p className="flex justify-center font-serif italic text-accent-blue md:text-white text-lg md:text-xl">
                    Customer Love
                </p>
            </div>
            <div>
                <h2 ref={textRef} className="text-4xl font-normal md:text-6xl md:max-w-screen-md mt-1 md:font-normal">
                    Our customer brands see consistent return on design investment
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 px-2 my-20">
                <img src={custloveicon} alt="coustomer love icon" className="w-fit md:w-fit md:h-fit" />
                <h3 className="opacity-55 md:opacity-60 italic text-2xl md:text-4xl md:max-w-screen-md lg:max-w-screen-lg ">
                    “ Yume Labs is a global UI UX Design and Industrial Design agency that helps your business scale
                    through fail-proof design innovation systems. “
                </h3>
            </div>

            <div className="customerImage flex gap-14 px-2">
                <div className="relative">
                    <img src={custimage1} alt="linear gradiant" className="w-20 h-20 md:w-36 md:h-36"/>
                    <img
                        src={SLIDES[currentindex].url}
                        className="w-[70px] h-[70px] md:w-28 md:h-28 rounded-full absolute left-8 top-2 md:left-12 md:top-4"
                        alt="CTO image"
                    />
                </div>
                <div className="customerDeatils mt-2 md:mt-4">
                    <h3 className="font-bold text-wrap text-sm md:text-2xl">{SLIDES[currentindex].name}</h3>
                    <h3 className="text-light-brown opacity-90 twxt-sm md:text-2xl">
                        {SLIDES[currentindex].desgination}
                    </h3>
                    <h3 className="text-light-brown opacity-90 text-sm md:text-2xl">{SLIDES[currentindex].company}</h3>
                </div>
            </div>

            <div className="paginationBar py-10 gap-5 pl-5 flex items-center">
                <div className="bg-light-gray h-[1px] opacity-70 w-full"></div>
                <button className="LeftBtn basis-auto" onClick={prevSlide}>
                    <img src={LeftBtn} alt="left btn" />
                </button>
                <button className="RightBtn basis-auto" onClick={nextSlide}>
                    <img src={RightBtn} alt="right btn" />
                </button>
            </div>
        </section>
    );
};

export default Customerlove;
