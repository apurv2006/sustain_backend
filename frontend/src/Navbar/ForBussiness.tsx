// src/ForBusiness.tsx
import React from 'react';

const ForBusiness: React.FC = () => {
    return (
        <div style={pageStyle}>
            <h2>For Business</h2>
            <p>Discover our solutions tailored for businesses.</p>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    padding: '20px',
};

export default ForBusiness;