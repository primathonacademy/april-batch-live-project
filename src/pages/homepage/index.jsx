import HeroSection from './HeroSection';
import OurServices from './OurService';
import WorkComponent from './WorkComponent';
import GetInTouch from './GetInTouch';
import Customerlove from './Customerlove';
import TheArt from './TheArtSection';
import OurServiceSection from './OurServiceSection';

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <OurServices />
            <WorkComponent />
            <Customerlove/>
            <TheArt />
            <OurServiceSection />
            <GetInTouch />
        </>
    );
};
export default Homepage;
