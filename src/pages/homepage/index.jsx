import HeroSection from './HeroSection';
import WorkComponent from './WorkComponent';
import TheArt from './TheArtSection';
import OurServiceSection from './OurServiceSection';
import Customerlove from './Customerlove';
import ExploreService from './ExploreService';

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <ExploreService/>
            <WorkComponent />
            <Customerlove />
            <TheArt />
            <OurServiceSection />
        </>
    );
};
export default Homepage;
