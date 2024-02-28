import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ourServiceImage1, ourServiceImage2, ourServiceImage3, rightArrowIcon } from "../../assets/images";
import { scrollHandler } from "../../utils/ScrollHandler";
import useWindowResize from "../../utils/windowResizeUtils";


const OurServices = () => {
  useGSAP(() => {

    if (useWindowResize) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.service-item-1').forEach((element) => {
        gsap.from(element, {
          y: 10,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            scrub: true,
          },
        });
        gsap.to(element, {
          y: 10,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });

      const cleanupScrollHandler = scrollHandler();
      return () => {
        cleanupScrollHandler();
      };
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch justify-center mt-16 gap-2 mx-4 overflow-hidden">
        <div className="bg-fade-white w-full md:w-[508px] mt-16 rounded-xl flex flex-col justify-center items-center service-item-1">
          <h1 className="lg:mt-6 md:mt-24 text-3xl md:text-5xl px-6 md:px-20 font-poppins">Innovation is the New Marketing.</h1>
          <p className="mt-3 md:mt-9 text-red-gray font-semibold opacity-60 text-lg md:text-2xl px-6 md:px-20 font-roboto">Build your brand moat with us and leave the competition in the dust.</p>
          
          <span className="flex lg:mt-6 md:mt-12 items-center justify-center hover:bg-gradient-to-r from-fade-blue-white from-30% to-pink-200 bg-fade-blue-white mx-6 md:mx-40 py-3 w-56 gap-6 rounded-full service-item-2">
            <h1 className="text-dark-blue font-semibold font-poppins">ALL OUR SERVICES</h1>
            <a href={"/service"}>
              <div className="bg-brand-blue rounded-full ml-2 p-3 hover:bg-gradient-to-r from-pink-300 from-30% to-brand-blue">
                <img src={rightArrowIcon} alt="arrow icon" className="w-4 h-4 hover:scale-125" />
              </div>
            </a>
          </span>
        </div>

        <div className="mt-8 md:mt-16 w-full md:w-[400px] flex md:flex-col sm:flex-row items-center gap-3 relative service-item-1">
          <div className="w-full lg:h-[320px] md:h-[300px] sm:h-[200px] relative">
            <img src={ourServiceImage1} alt="service image" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className=" text-sm md:text-lg lg:text-xl text-gray-500 font-poppins">PRODUCT</h1>
              <p className=" text-xs md:text-sm lg:text-base text-gray-500 font-poppins">INNOVATION</p>
            </div>
          </div>
          <div className="w-full h-full md:h-[300px] sm:h-[200px] relative">
            <img src={ourServiceImage2} alt="service image" className="w-full h-full object-cover rounded-xl" />
            <div className="absolute bottom-0 left-0 p-4">
              <h1 className="text-sm md:text-lg lg:text-xl text-gray-500 font-poppins">INDUSTRIAL</h1>
              <p className="text-xs md:text-sm lg:text-base text-gray-500 font-poppins">DESIGNS</p>
            </div>
          </div>
        </div>
        <div className="bg-fade-orange w-full md:w-[400px] mt-8 md:mt-16 rounded-xl flex justify-center items-center overflow-hidden relative service-item-1">
          <div className="overflow-hidden" style={{ marginRight: '-200px' }}>
            <img src={ourServiceImage3} alt="service image" className="w-full h-full" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h1 className="text-sm md:text-lg lg:text-xl font-semibold">UX/UI</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
