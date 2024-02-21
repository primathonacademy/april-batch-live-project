import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <h3>header</h3>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
