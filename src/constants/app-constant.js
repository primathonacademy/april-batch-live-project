export const SCREEN_SIZE = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
    XXXL: 1768
};

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    CONTACT: '/contact',
    CASE_STUDY: '/case-study',
    INSIGHT: '/insights',
    INSIGHT_DETAIL: '/insight-detail',
    WORK: '/work',
    SERVICE: '/service'
};

export const NAV_ITEMS = [
    {
        title: 'Work',
        link: ROUTES.WORK
    },
    {
        title: 'services',
        link: ROUTES.SERVICE
    },
    {
        title: 'Insights',
        link: ROUTES.INSIGHT
    },
    {
        title: 'About Us',
        link: ROUTES.ABOUT
    },
    {
        title: 'Labs',
        link: ROUTES.CASE_STUDY
    }
];
