import gridImage from '../../../assets/icons/background-grid-lines.svg';

const InsightDetailsHeader = (props) => {
    // eslint-disable-next-line react/prop-types
    const { heading, date, headingImage } = props;

    return (
        <>
            <section className="overflow-hidden mt-12 lg:pt-24 lg:pb-6 lg:px-[9.5%]  pt-0.5 pb-7 px-[9.5%] md:pt-[9.5%]">
                <div className="brightness-[0.1] h-0 relative z-0 -top-14 -left-52 hidden md:block">
                    <img className=" scale-x-[0.96] scale-y-[1.3] " src={gridImage} alt="Background grid lines" />
                </div>
                <div className="md:hidden  block brightness-[0.1] h-0 relative z-0 ;">
                    <img
                        className="h-80 scale-x-100 scale-y-[1.9]"
                        src={gridImage}
                        alt="Background grid lines mobile"
                    />
                </div>
                <div>
                    <span className="max-w-52 md:block bg-brand-blue text-white text-center italic text-2xl font-normal -mt-3 mb-4 font-serif hidden">
                        Article
                    </span>
                    <span className="max-w-52 block bg-brand-blue text-white text-center italic text-2xl font-normal -mt-3 mb-20 font-serif md:hidden  relative top-20 ">
                        Our Services
                    </span>
                    <h1
                        className="text-6xl font-normal tracking-[1px] leading-20 max-w-[65%] mb-5 font-serif  md:max-w-full -ml-0.5 
}">
                        {heading}
                    </h1>
                </div>
                <div>
                    <p className="text-2xl text-[gray] font-normal mb-7 font-roboto  ">{date}</p>
                </div>
            </section>

            <section className="pt-0 pb-8 px-[9.5%]">
                <img
                    className="w-full object-[100%_86%] object-cover h-[540px] rounded-4"
                    src={headingImage}
                    width={1024}
                    height={540}
                    alt="the art image"
                />
            </section>
        </>
    );
};

export default InsightDetailsHeader;
