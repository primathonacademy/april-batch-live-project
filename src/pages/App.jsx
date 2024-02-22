import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../Layout';
import About from './About';
import Contact from './contact';
import CaseStudy from './case-study';
import Insight from './insight';
import InsightDetail from './insight-detail';
import Work from './work';
import Service from './service';
import Homepage from './homepage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="casestudy" element={<CaseStudy />} />
                    <Route path="insights" element={<Insight />} />
                    <Route path="insightdetails" element={<InsightDetail />} />
                    <Route path="work" element={<Work />} />
                    <Route path="service" element={<Service />} />
                    {/* 404 */}
                    <Route path="*" element={<h1>404 — Page Not Found</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
