import { useEffect } from 'react';

export default function useResizeHandler(callback) {
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth >= 1024) {
                callback(false);
            }
        };

        window.addEventListener('resize', checkScreenSize);

        checkScreenSize();

        return () => window.removeEventListener('resize', checkScreenSize);
    }, [callback]);
}
