import HeroSection from './HeroSection';
import OurServices from './OurService';
import WorkComponent from './WorkComponent';
import GetInTouch from './GetInTouch';
import OurServiceSection from './OurServiceSection';

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <OurServices />
            <WorkComponent />
            <OurServiceSection/>
            <GetInTouch />
        </>
    );
};
export default Homepage;
