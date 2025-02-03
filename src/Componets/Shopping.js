import React, { useEffect, useState, useRef } from 'react';
import apple from '../images/apple.webp';
import banana from '../images/banana.webp';
import blueberries from '../images/blueberries.webp';
import custardApple from '../images/custardapple.webp';
import fig from '../images/fig.webp';
import grapes from '../images/grapes.webp';
import guava from '../images/guava.webp';
import jackfruit from '../images/jackfruit.jpg';
import lychee from '../images/lychee.webp';
import mango from '../images/mango.webp';
import mulberry from '../images/mulberry.jpg';
import orange from '../images/orange.webp';
import papaya from '../images/papaya.webp';
import pineapple from '../images/pineapple.webp';
import sapota from '../images/sapota.webp';
import strawberries from '../images/strawberries.webp';
import tamarind from '../images/tamarind.webp';
import watermelon from '../images/watermelon.webp';


const worldWideFruits = [
    { id: 1, name: 'Apple', cost: '120r', imageUrl: apple },
    { id: 2, name: 'Orange', cost: '100r', imageUrl: orange },
    { id: 3, name: 'Banana', cost: '90r', imageUrl: banana },
    { id: 4, name: 'Mango', cost: '160r', imageUrl: mango },
    { id: 5, name: 'Strawberry', cost: '200r', imageUrl: strawberries },
    { id: 6, name: 'Pineapple', cost: '150r', imageUrl: pineapple },
    { id: 7, name: 'Grapes', cost: '170r', imageUrl: grapes },
    { id: 8, name: 'Watermelon', cost: '160r',imageUrl: watermelon },
    { id: 9, name: 'Blueberry', cost: '180r', imageUrl: blueberries },
];

const localFruits = [
    { id: 10, name: 'Guava', cost: '140r', imageUrl: guava },
    { id: 11, name: 'Lychee', cost: '170r', imageUrl: lychee },
    { id: 12, name: 'Papaya', cost: '110r', imageUrl: papaya },
    { id: 13, name: 'Jackfruit', cost: '210r', imageUrl: jackfruit },
    { id: 14, name: 'Custard Apple', cost: '160r', imageUrl: custardApple },
    { id: 15, name: 'Sapota', cost: '110r', imageUrl: sapota },
    { id: 16, name: 'Tamarind', cost: '120r', imageUrl: tamarind },
    { id: 17, name: 'Mulberry', cost: '140r', imageUrl: mulberry },
    { id: 18, name: 'Fig', cost: '190r', imageUrl: fig },
];


const SeasonalFruits = () => {
    const [currentSlideWorld, setCurrentSlideWorld] = useState(0);
    const [currentSlideLocal, setCurrentSlideLocal] = useState(0);
    const slideIntervalWorld = useRef(null);
    const slideIntervalLocal = useRef(null);

    useEffect(() => {
        startSlideInterval();
        return () => stopSlideInterval();
    }, []);

    const startSlideInterval = () => {
        slideIntervalWorld.current = setInterval(() => {
            setCurrentSlideWorld((prevSlide) => (prevSlide + 1) % worldWideFruits.length);
        }, 3000); 

        slideIntervalLocal.current = setInterval(() => {
            setCurrentSlideLocal((prevSlide) => (prevSlide + 1) % localFruits.length);
        }, 3000); 
    };

    const stopSlideInterval = () => {
        if (slideIntervalWorld.current) clearInterval(slideIntervalWorld.current);
        if (slideIntervalLocal.current) clearInterval(slideIntervalLocal.current);
    };

    const handlePrevClickWorld = () => {
        stopSlideInterval();
        setCurrentSlideWorld((prevSlide) => (prevSlide - 1 + worldWideFruits.length) % worldWideFruits.length);
        startSlideInterval();
    };

    const handleNextClickWorld = () => {
        stopSlideInterval();
        setCurrentSlideWorld((prevSlide) => (prevSlide + 1) % worldWideFruits.length);
        startSlideInterval();
    };

    const handlePrevClickLocal = () => {
        stopSlideInterval();
        setCurrentSlideLocal((prevSlide) => (prevSlide - 1 + localFruits.length) % localFruits.length);
        startSlideInterval();
    };

    const handleNextClickLocal = () => {
        stopSlideInterval();
        setCurrentSlideLocal((prevSlide) => (prevSlide + 1) % localFruits.length);
        startSlideInterval();
    };

    return (
        <div className="seasonal-fruits">
            <h1>Seasonal Fruits</h1>
            <div className="fruits-carousel">
                <h2>World Wide Fruits</h2>
                <button className="carousel-arrow left-arrow" onClick={handlePrevClickWorld}>&#10094;</button>
                <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlideWorld * 16}%)` }}>
                    {worldWideFruits.map((fruit) => (
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.imageUrl} alt={fruit.name} />
                            <h2>{fruit.name}</h2>
                            <p>{fruit.cost}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right-arrow" onClick={handleNextClickWorld}>&#10095;</button>
            </div>
            <div className="fruits-carousel">
                <h2>Local Fruits</h2>
                <button className="carousel-arrow left-arrow" onClick={handlePrevClickLocal}>&#10094;</button>
                <div className="carousel-wrapper" style={{ transform: `translateX(-${currentSlideLocal * 16}%)` }}>
                    {localFruits.map((fruit) => (
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.imageUrl} alt={fruit.name} />
                            <h2>{fruit.name}</h2>
                            <p>{fruit.cost}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right-arrow" onClick={handleNextClickLocal}>&#10095;</button>
            </div>
        </div>
    );
}

export default SeasonalFruits;
