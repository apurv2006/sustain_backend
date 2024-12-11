// src/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div style={pageStyle}>
            <h2>About Us</h2>
            <p>We are a company dedicated to providing the best services.</p>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    padding: '20px',
};

export default AboutUs;