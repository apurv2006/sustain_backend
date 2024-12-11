// src/ForCustomer.tsx
import React from 'react';

const ForCustomer: React.FC = () => {
    return (
        <div style={pageStyle}>
            <h2>For Customer</h2>
            <p>Explore our offerings designed for customers.</p>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    padding: '20px',
};

export default ForCustomer;