import Strategy from '../../pages/case-study/Strategy/index';
import { Productdesign } from './Productdesign';
import StatementSection from "./StatementSection";
import StatementSection from './StatementSection';
import Unbiased from './Unbiased';
import Project from '../../pages/case-study/Project/index';

const CaseStudy = () => {
    return (
        <div className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <Strategy />
            <StatementSection />
             <Productdesign/>
            <Unbiased />
		    </div>
            <Project />
        </div>
    );
};

export default CaseStudy;
