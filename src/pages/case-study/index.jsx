import Strategy from '../../pages/case-study/Strategy/index';
import { Productdesign } from './Productdesign';
import StatementSection from "./StatementSection";
import HeroSection from './HeroSection';
import Unbiased from './Unbiased';
import Project from '../../pages/case-study/Project/index';

const CaseStudy = () => {
    return (
        <div>
            <HeroSection />
            <StatementSection />
            <Productdesign/>
            <Strategy />
            <Unbiased />
            <Project />
        </div>
    );
};

export default CaseStudy;
