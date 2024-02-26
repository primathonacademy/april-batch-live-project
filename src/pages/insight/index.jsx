import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import newsTechImgMobile from '../../assets/insightsassets/news-tech-img.png';
import newsTechImgDesktop from '../../assets/insightsassets/news-tech-desktop.png';
import newsLogImg from '../../assets/insightsassets/news-log-img.png';
import loadMore from '../../assets/insightsassets/load-more.svg';
import lineDesign from '../../assets/insightsassets/line-design.svg';

const Insights = () => {
    const InsightBox = () => (
        <div className="flex flex-col lg:flex-row items-center justify-between px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36 pt-12 md:pt-6 lg:pb-6 border-b-2">
            <div className="w-full lg:w-1/3">
                <img src={newsLogImg} alt="news tech image" className="object-cover w-full rounded-lg" />
            </div>
            <div className="lg:w-3/5">
                <p className="text-section-box-paragraph-color lg:text-xs xl:text-base lg:font-medium leading-5 py-6 lg:py-2">
                    /01 / News Technology / 03 March 2022
                </p>
                <p className="text-[1.75rem] lg:text-xl xl:text-3xl 2xl:text-4xl pb-10 lg:pb-5">
                    Great Place to Work 2022 Survey: Vincit is the best place to work in Finland, again!
                </p>
            </div>
        </div>
    );

    const numberOfInsights = 7;
    const insightBoxes = [];

    for (let i = 0; i < numberOfInsights; i++) {
        insightBoxes.push(<InsightBox key={i} />);
    }

    return (
        <Fragment>
            <img
                src={lineDesign}
                alt="line design"
                className="w-full absolute top-5 md:top-20 lg:top-12 2xl:-top-12 -left-9"
            />
            <section>
                <div className="absolute top-4 -z-10 w-full pl-0">
                    <img src="" className="object-cover h-95" />
                </div>
                <div className="px-9 md:px-16 lg:px-20 xl:px-28 2xl:px-36 pt-12">
                    <h3 className="italic font-serif font-light text-center mb-2 2xl:mb-6 text-white w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 py-1 text-base md:text-lg 2xl:text-2xl bg-accent-blue">
                        About Us
                    </h3>
                    <p className="text-3xl text-section-box-heading-color text-6xl font-poppins font-medium md:text-5xl lg:text-9xl xl:text-10xl 2xl:text-11xl w-full sm:w-4/5 md:w-11/12 leading-9 md:leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight">
                        Feel at home among brave dreamers and curious rebels.
                    </p>
                    <p className="w-5/6 sm:w-4/6 lg:w-3/4 md:text-lg lg:text-xl xl:text-2xl text-paragraph-gray-color py-10 md:font-medium sm:py-6 md:pb-12">
                        Here in “the pond” we are driven by creativity, curiosity and a passion for challenging the
                        status quote in everything we do
                    </p>
                </div>
                <div className="pb-12 pt-4 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
                    <img
                        src={newsTechImgMobile}
                        alt="news tech image"
                        className="block md:hidden object-cover w-full overflow-hidden md:rounded-xl"
                    />
                    <img
                        src={newsTechImgDesktop}
                        alt="news tech image"
                        className="hidden md:block object-cover w-full overflow-hidden md:rounded-xl"
                    />
                </div>
            </section>
            <section>{insightBoxes}</section>
            <NavLink to="/Loadmore" className="flex justify-center pt-20 pb-36">
                <img src={loadMore} alt="load more" />
            </NavLink>
        </Fragment>
    );
};

export default Insights;
