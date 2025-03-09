import React from 'react';
import apple from '../images/apple.webp';
import orange from '../images/orange.webp';
import banana from '../images/banana.webp';
import mango from '../images/mango.webp';
import strawberries from '../images/strawberries.webp';
import pineapple from '../images/pineapple.webp';
import grapes from '../images/grapes.webp';
import watermelon from '../images/watermelon.webp';
import blueberries from '../images/blueberries.webp';
import guava from '../images/guava.webp';
import lychee from '../images/lychee.webp';
import papaya from '../images/papaya.webp';
import jackfruit from '../images/jackfruit.jpg';
import custardApple from '../images/custardapple.webp';
import sapota from '../images/sapota.webp';
import tamarind from '../images/tamarind.webp';
import mulberry from '../images/mulberry.jpg';
import fig from '../images/fig.webp';

const worldWideFruits = [
    { id: 1, name: 'Apple', cost: '₹120', imageUrl: apple },
    { id: 2, name: 'Orange', cost: '₹100', imageUrl: orange },
    { id: 3, name: 'Banana', cost: '₹90', imageUrl: banana },
    { id: 4, name: 'Mango', cost: '₹160', imageUrl: mango },
    { id: 5, name: 'Strawberries', cost: '₹200', imageUrl: strawberries },
    { id: 6, name: 'Pineapple', cost: '₹150', imageUrl: pineapple },
    { id: 7, name: 'Grapes', cost: '₹170', imageUrl: grapes },
    { id: 8, name: 'Watermelon', cost: '₹160', imageUrl: watermelon },
    { id: 9, name: 'Blueberries', cost: '₹180', imageUrl: blueberries },
];

const localFruits = [
    { id: 10, name: 'Guava', cost: '₹140', imageUrl: guava },
    { id: 11, name: 'Lychee', cost: '₹170', imageUrl: lychee },
    { id: 12, name: 'Papaya', cost: '₹110', imageUrl: papaya },
    { id: 13, name: 'Jackfruit', cost: '₹210', imageUrl: jackfruit },
    { id: 14, name: 'Custard Apple', cost: '₹160', imageUrl: custardApple },
    { id: 15, name: 'Sapota', cost: '₹110', imageUrl: sapota },
    { id: 16, name: 'Tamarind', cost: '₹120', imageUrl: tamarind },
    { id: 17, name: 'Mulberry', cost: '₹140', imageUrl: mulberry },
    { id: 18, name: 'Fig', cost: '₹190', imageUrl: fig },
];

const SeasonalFruits = () => {
    return (
        <div className="seasonal-fruits">
            <h1>Seasonal Fruits</h1>

            {/* World Wide Fruits Section */}
            <section>
                <h2>World Wide Fruits</h2>
                <div className="fruit-grid">
                    {worldWideFruits.map((fruit) => (
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.imageUrl} alt={fruit.name} />
                            <h3>{fruit.name}</h3>
                            <p>{fruit.cost}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Local Fruits Section */}
            <section>
                <h2>Local Fruits</h2>
                <div className="fruit-grid">
                    {localFruits.map((fruit) => (
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.imageUrl} alt={fruit.name} />
                            <h3>{fruit.name}</h3>
                            <p>{fruit.cost}</p>
                            <button>Buy Now</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SeasonalFruits;
