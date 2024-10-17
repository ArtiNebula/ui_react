import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Features from './Features';

const Home = () => {
    return (
        <div className="full-height">
            <Navbar />
            <HeroSection />
            <About/>
            <Features />
        </div>
    );
};

export default Home;
