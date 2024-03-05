import HeroSection from './HeroSection';
import OurServices from './OurService';
import WorkComponent from './WorkComponent';
import GetInTouch from './GetInTouch';
import TheArt from "./TheArtSection";

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <OurServices />
            <WorkComponent />
            <TheArt/>
            <GetInTouch />
        </>
    );
};
export default Homepage;
