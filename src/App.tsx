import React from 'react';
import HomeComp from './components/HomeComp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewChart from './Pages/ViewChart';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeComp />} />
                    <Route path="/viewchart" element={<ViewChart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
