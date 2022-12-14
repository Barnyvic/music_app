import React from 'react';
import HomeComp from './Pages/HomeComp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewChart from './Pages/ViewChart';
import RadioComp from './Pages/RadioComp';

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComp />} />
                    <Route path="/viewchart" element={<ViewChart />} />
                    <Route path="/radio" element={<RadioComp />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
