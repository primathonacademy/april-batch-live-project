import Customerlove from "./Customer-love";
import OurServices from "./OurService";

const Homepage = () => {
    return <div className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
        <OurServices/>
        <Customerlove/>
    </div>;
import OurServices from './OurService';
import GetInTouch from './GetInTouch';

const Homepage = () => {
    return (
        <>
            <OurServices />
            <GetInTouch />
        </>
    );
};
export default Homepage;
