import { caseStudyBgGrid, bgGridLines } from '../../assets';

const HeroSection = () => {
    return (
        <section className="py-24 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36 overflow-x-clip">
            <div className="h-0 relative top-2 md:-top-6 -left-46 md:left-36">
                <img
                    className="hidden md:block h-80 max-w-none md:scale-x-[1.6] md:scale-y-[2] relative -z-10"
                    src={bgGridLines}
                    alt="hero grid image"
                    loading="lazy"
                />
                <img
                    className=" md:hidden h-80 scale-x-[1.5] scale-y-[1.7] max-w-none relative -z-10"
                    src={caseStudyBgGrid}
                    alt="hero grid image"
                    loading="lazy"
                />
            </div>

            <div className="flex-col flex items-start gap-8 md:gap-6 ">
                <div className="flex-1">
                    <h2 className="font-serif italic md:text-4xl bg-accent-blue md:inline px-4 text-white hidden">
                        Minits
                    </h2>
                    <h2 className="font-serif italic text-lg bg-accent-blue inline px-4 text-white md:hidden">
                        Our Services
                    </h2>
                    <h1 className="md:text-7.5xl md:leading-24.5 font-[500] tracking-wide md:mt-7 hidden md:block">
                        Simplifying <br />
                        the Next.
                    </h1>
                    <h1 className="mt-2 text-4.5xl leading-[55px] font-[500] tracking-wide mt-3. md:hidden ">
                        Feel at home among brave dreamers and curious rebels.
                    </h1>
                </div>
                <div className="flex-1 ">
                    <p className="md:text-2xl text-neutral-600 hidden md:block">
                        Maiven is a cutting-edge AI-powered software designed to assist companies by analyzing audience
                        engagement through a combination of eye tracking and facial recognition technologies. This
                        software aims to provide insights into where the audience’s attention is focused the most and
                        their emotional reactions to the content.
                    </p>
                    <p className="text-lg text-neutral-600 md:hidden">
                        High-potential global brands trust Yume Labs for better customer advocacy, stronger investor
                        trust, and higher media love.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
