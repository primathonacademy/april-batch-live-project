import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Cursor from './components/Cursor';

const Layout = () => {
    return (
        <>
            <Cursor />
            <Header />
            <main className='overflow-hidden'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
