import HeroSection from './HeroSection';
import WorkComponent from './WorkComponent';
import TheArt from './TheArtSection';
import OurServiceSection from './OurServiceSection';
import Customerlove from './Customerlove';
import ExploreService from './ExploreService';

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <ExploreService />
            <WorkComponent />
            <OurServiceSection />
            <Customerlove />
            <TheArt />
        </div>
    );
};
export default Homepage;
