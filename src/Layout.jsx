import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';


const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
               
            </main>
            <Footer />
        </>
    );
};

export default Layout;
