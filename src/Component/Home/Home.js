import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import HomeContent from '../HomeContent/HomeContent';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <HomeContent />
            <AboutUs />
            <Blogs />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;