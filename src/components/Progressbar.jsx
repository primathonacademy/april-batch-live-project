import { useEffect, useState } from 'react';

import { arrowDown } from '../assets';

const ProgressBar = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const calculatedScrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollPercent(calculatedScrollPercent);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed z-50 bottom-6 right-6 pointer-events-none md:h-24 md:w-24 h-16 w-16 rotate-90 rounded-full overflow-hidden">
            <div className="bg-scroll-gradient h-full" style={{ width: `${scrollPercent}%` }}></div>
            <img src={arrowDown} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90" />
        </div>
    );
};

export default ProgressBar;
