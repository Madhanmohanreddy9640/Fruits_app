import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const FruitShop = () => {
  return (
    <div className="fruit-shop-container">
      <header className="header">
        {/* <img src="-logo.png" alt="dil" className="logo" />
        <div className="header-search">
          <div className="location-search">
            <i className="fas fa-location-arrow location-icon"></i>
            <input
              type="text"
              placeholder="Enter city or area"
              className="search-bar stylish-input"
            />
          </div>
          <div className="vendor-search">
            <i className="fas fa-store search-icon"></i>
            <input
              type="text"
              placeholder="Find a Fruit Shop..."
              className="search-bar stylish-input"
            />
          </div>
          <button className="search-button revamped-button">
            <i className="fas fa-search"></i> Find
          </button>
        </div> */}
        <div className="header-right">
          <button className="login-button revamped-button">
            <i className="fas fa-user-circle"></i> Login / Sign Up
          </button>
        </div>
      </header>

      <nav className="breadcrumb">
        <a href="#">Bangalore</a> &gt;
        <a href="#">Fruits In Bangalore</a> &gt;
        <a href="#">Fruits in Marthahalli</a> &gt;
        <a href="#">MS Fruits Shop</a>
      </nav>

      <main className="main-content">
        <h1>MS Fruits Shop</h1>
        <div className="shop-info">
          <p>
            <i className="fas fa-map-marker-alt"></i> Marthahalli, Bangalore
          </p>
          <p>
            <i className="fas fa-clock"></i> Open until 11:00 pm
          </p>
          <p>
            <i className="fas fa-briefcase"></i> 4 Years in Business
          </p>
        </div>
        <div className="actions">
          <button className="show-number revamped-button">
            <i className="fas fa-phone-alt"></i> <a href="tel:+919876543210" target="blank">Call Now</a>
          </button>
          <button className="best-deal revamped-button">
            <i className="fas fa-badge-percent"></i> Grab Deal
          </button>
          <button className="whatsapp revamped-button">
            <i className="fab fa-whatsapp"></i> <a href="https://wa.me/9640393231" target="blank">Contact on WhatsApp</a>
          </button>
        </div>
        <div className="extra-search stylish-search">
          <i className="fas fa-search-location search-icon"></i>
          <input
            type="text"
            placeholder="Search for other...."
            className="search-bar stylish-input"
          />
          <button className="search-button revamped-button">
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </main>
    </div>
  );
};

export default FruitShop;
