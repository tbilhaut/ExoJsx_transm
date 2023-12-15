import React, { useState } from 'react';

const FunctionalComponent = () => {
    const [color, setColor] = useState('#718292');

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };

    const handleMouseEnter = () => {
        const randomColor = generateRandomColor();
        setColor(randomColor);
    };

    return (
        <div>
            <div
                style={{ color: color, cursor: 'pointer' }}
                onMouseEnter={handleMouseEnter}
            >
                Je suis un composant
            </div>
        </div>
    );
};

export default FunctionalComponent;
