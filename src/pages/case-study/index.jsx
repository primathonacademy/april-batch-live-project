import Strategy from '../../pages/case-study/Strategy/index';
import StatementSection from './StatementSection';
import Unbiased from './Unbiased';

const CaseStudy = () => {
    return (
        <div className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <Strategy />
            <StatementSection />
            <Unbiased />
        </div>
    );
};

export default CaseStudy;
