import Research from './ResearchToggle';

const ResearchSection = () => {
    return (
        <div className="py-6 px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <Research />
            <hr className="mb-10 hidden md:block pb-10" />
            <Research />
            <hr className="mb-10  hidden md:block pb-10" />
            <Research />
        </div>
    );
};

export default ResearchSection;
