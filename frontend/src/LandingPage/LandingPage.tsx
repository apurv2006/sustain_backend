import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div style={landingStyle}>
            <h1>Welcome to Our Website</h1>
            <p>Your journey starts here!</p>
        </div>
    );
};

const landingStyle: React.CSSProperties = {
    backgroundImage: 'url(../../assets/Sus.gif)',
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
};

export default LandingPage;