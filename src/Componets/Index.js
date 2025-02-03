import React from 'react';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://png.pngtree.com/template/20200309/ourmid/pngtree-organic-fresh-fruit-logo-with-apple-and-green-leaf-image_355045.jpg" alt="Fruits Logo" />
                <h1>MS FRUITS</h1>
            </div>
            <div className="nav-links">
                <a href="#home"><FaHome /> Home</a>
                <a href="#about"><FaInfoCircle /> About</a>
                <a href="#services"><FaServicestack /> Services</a>
                <a href="#contact"><FaEnvelope /> Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
