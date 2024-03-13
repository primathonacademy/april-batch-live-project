import InsightDetailsHeader from '../../pages/insight-detail/InsightDetailsHeader';
import Articleimage from '../../assets/images/article-header-image.png';
import AuthorDetail from '../../pages/insight-detail/AuthorDetails';
import ArticleSection from '../../pages/insight-detail/InsightDetailsBlogSection';

const data = {
    heading: 'Why do we need a design system',
    date: '26 Feb 2024',
    headingImage: Articleimage
};

const InsightDetail = () => {
    return (
        <div className="px-6 md:px-16 lg:px-20 xl:px-28 2xl:px-36">
            <InsightDetailsHeader {...data} />
            <ArticleSection />
            <AuthorDetail />
        </div>
    );
};

export default InsightDetail;
