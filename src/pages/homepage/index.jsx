import HeroSection from './HeroSection';
import OurServices from './OurService';
import WorkComponent from './WorkComponent';
import TheArt from './TheArtSection';
import OurServiceSection from './OurServiceSection';
import Customerlove from './Customerlove';

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <OurServices />
            <WorkComponent />
            <Customerlove />
            <TheArt />
            <OurServiceSection />
        </>
    );
};
export default Homepage;
