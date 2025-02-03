import React, { useEffect, useRef, useState } from 'react';
import treefruits from '../images/treefruits.jpg'
import treeorange2 from '../images/treeorange2.jpg'

const adsData = [
    {
        id: 1,
        title: 'Mango Product ',
        description: 'Get the best deal on this amazing product.',
        imageUrl: treefruits,
    },
    {
        id: 2,
        title: 'Orange Product ',
        description: 'Experience the best service in the market.',
        imageUrl: treeorange2,
    },
    // Add more ad data as needed
];

const AdsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideInterval = useRef(null);

    useEffect(() => {
        startSlideInterval();
        return () => stopSlideInterval();
    }, []);

    const startSlideInterval = () => {
        slideInterval.current = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % adsData.length);
        }, 3000);
    };

    const stopSlideInterval = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
    };

    return (
        <div className="ads-slider">
            {adsData.map((ad, index) => (
                <div
                    key={ad.id}
                    className={`ad-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${ad.imageUrl})` }}
                >
                    <div className="ad-content">
                        <h3>{ad.title}</h3>
                        <p>{ad.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AdsSlider;
