import React from 'react';
import { FaInstagram, FaGoogle, FaTelegramPlane, FaFacebookF, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about-page">
            <h1>About Seasonal Fruits</h1>
            <p>Welcome to Seasonal Fruits! We offer a wide variety of fruits from around the world, available throughout the year.</p>
            <h2>Connect with Us</h2>
            <div className="social-icons">
                <a href="https://www.instagram.com/madhan__reddy4_19189/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
        </div>
    );
}

export default About;
