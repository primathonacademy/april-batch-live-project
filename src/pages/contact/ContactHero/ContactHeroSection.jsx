import gridImage from '../../../assets/images/bg-grid-lines.png';

import styles from './styles.module.css';

const headingData = {
    web: {
        title: 'Let us make it real.',
        subTitle: 'Contact Us',
        description:
            "Here in “the pond” we're driven by creativity, curiosity and a passion for challenging the status quo in everything we do",
    },
    mobile: {
        title: 'Feel at home among brave dreamers and curious rebels.',
        subTitle: 'Contact Us',
        description:
            'High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust, and higher media love.',
    },
};

const ContactUsHeroSection = () => (
    <section className={styles.yumeLabsMainHeading}>
        <div className={styles.topSectionGrid}>
            <img src={gridImage} alt="Background grid lines" />
        </div>
        <div className={styles.topSectionGridTwo}>
            <img src={gridImage} alt="Background grid lines" />
        </div>
        <div className={styles.yumeLabsMainHeadingLeft}>
            <span>{headingData.web.subTitle}</span>
            <h1 className={styles.mobileViewHide}>{headingData.web.title}</h1>
            <h1 className={styles.webViewHide}>{headingData.mobile.title}</h1>
        </div>
        <div className={styles.yumeLabsMainHeadingRight}>
            <p className={styles.mobileViewHide}>{headingData.web.description}</p>
            <p className={styles.webViewHide}>{headingData.mobile.description}</p>
        </div>
    </section>
);

export default ContactUsHeroSection;
