import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import OurServiceSection from './components/OurService';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <OurServiceSection />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
