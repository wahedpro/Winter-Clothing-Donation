import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Statistics from "../components/Statistics/Statistics";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            {/* Banner Section */}
            <div data-aos="fade-up"><Banner /></div>
            {/* About Us Section */}
            <div data-aos="fade-right"><AboutUs /></div>
            {/* How It Works Section */}
            <div data-aos="fade-left"><HowItWorks /></div>
            {/* Statistics */}
            <div data-aos="zoom-in"><Statistics /></div>
            {/* Testimonials */}
            <div data-aos="flip-up"><Testimonials /></div>
        </div>
    );
};

export default HomePage;
