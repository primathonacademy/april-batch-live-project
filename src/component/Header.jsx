import { useState } from 'react';

import useWindowDimensions from '../utils/useWindowDimensions';

import YumiLabIcon from '../assets/svg/yumeLabsIcon.svg';
import YumiLabLogo from '../assets/svg/yumelabsLogo.svg';
import Hamburger from '../assets/svg/hamburger.svg';
import Cancel from '../assets/svg/cancel.svg';

import styles from './header.module.css';

const Header = () => {
    const dimensions = useWindowDimensions();
    
    const [isOpenHamBurger, setIsOpenHamBurger] = useState(true);

    const handleToggle = () => {
        setIsOpenHamBurger(!isOpenHamBurger);
    };

    return (
        <div>
            <div className={styles.containerWrapper}>
                <div className={styles.leftContainer}>
                    <img src={YumiLabLogo} alt="Yumi labs icon" className={styles.yumiLabLogo} />
                    <img src={YumiLabIcon} alt="Yumi labs icon" className={styles.yumiLabIcon} />
                </div>

                {dimensions.width && dimensions.width > 1440 ? (
                    <div className={styles.rightContainer}>
                        <div className={styles.leftNavbar}>
                            <span className={styles.navbarItem}>WORKS</span>
                            <a href="#services" className={styles.navbarItem}>
                                SERVICES
                            </a>
                            <a href="#insights" className={styles.navbarItem}>
                                INSIGHTS
                            </a>
                            <a href="#about-us" className={styles.navbarItem}>
                                ABOUT US
                            </a>
                            <a href="#labs" className={styles.navbarItem}>
                                LABS
                            </a>
                        </div>
                        <div className={styles.rightNavbar}>
                            {' '}
                            <a href="#contact us">CONTACT US</a>{' '}
                        </div>
                    </div>
                ) : (
                    <>
                        {isOpenHamBurger ? (
                            <div onClick={handleToggle} aria-hidden className={styles.toggleIcon}>
                                <img src={Hamburger} alt="hamburger" height={25} width={25} />
                            </div>
                        ) : (
                            <div onClick={handleToggle} aria-hidden className={styles.toggleIcon}>
                                <img src={Cancel} alt="cancel" height={25} width={25} />
                            </div>
                        )}
                    </>
                )}
            </div>

            {!isOpenHamBurger && dimensions.width < 1440 && (
                <div className={styles.leftNavbarMobile}>
                    <a href="#works" className={styles.navbarItem}>
                        WORKS
                    </a>
                    <a href="#services" className={styles.navbarItem}>
                        SERVICES
                    </a>
                    <a href="#insights" className={styles.navbarItem}>
                        INSIGHTS
                    </a>
                    <a href="#about-us" className={styles.navbarItem}>
                        ABOUT US
                    </a>
                    <a href="#labs" className={styles.navbarItem}>
                        LABS
                    </a>
                </div>
            )}
        </div>
    );
};

export default Header;
