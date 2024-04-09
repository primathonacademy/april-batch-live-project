import gridImage from '../../../assets/images/bg-grid-lines.png';
import { headingData } from '../../../constants/contact-data';

const ContactUsHeroSection = () => (
    <section className="overflow-x-clip mt-12 pt-24 pb-12  flex-col gap-y-12 relative overflow-hidden">
        <div className="brightness-[0.1] h-0 relative z-0 -top-11 -left-52   flex-[100%]">
            <img
                className="w-full h-80 overflow-x-hidden scale-x-[0.96] scale-y-150"
                src={gridImage}
                alt="Background grid lines"
            />
        </div>
        <div className="hidden flex-[100%] top-20">
            <img className="scale-x-[0.96] scale-y-[0.85]" src={gridImage} alt="Background grid lines" />
        </div>
        <div className="md:max-w-[70%] max-w-full flex-[100%]">
            <span className="md:max-w-[18%] block bg-[rgb(12,12,161)] text-[white] text-center italic text-2xl font-semibold -mt-6 -mb-13 font-serif max-w-[50%] relative -top-3">
                {headingData.web.subTitle}
            </span>
            <h1 className="md:text-7xl font-medium tracking-[1px]  md:-mt-5 md:mb-5 font-poppins text-[2.875rem] leading-[52px] -mt-2 mb-12 md:block hidden">
                {headingData.web.title}
            </h1>
            <h1 className="md:text-7xl font-medium tracking-[1px]  md:-mt-5 md:mb-5 font-poppins text-[2.875rem] leading-[52px] -mt-2 mb-8 md:hidden block">
                {headingData.mobile.title}
            </h1>
        </div>
        <div className="md:max-w-[50%] flex-[100%] max-w-full pt-8 ">
            <p className="md:text-2xl text-[gray] font-normal -mt-2.5 font-roboto text-lg max-w-[85%] md:block hidden ">
                {headingData.web.description}
            </p>
            <p className="md:hidden md:text-2xl text-[gray] font-normal -mt-2.5 font-roboto text-lg max-w-[85%] block">
                {headingData.mobile.description}
            </p>
        </div>
    </section>
);

export default ContactUsHeroSection;
