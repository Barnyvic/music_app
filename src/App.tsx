import React from 'react';
import HomeComp from './components/HomeComp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <HomeComp />
            <Footer />
        </div>
    );
}

export default App;
