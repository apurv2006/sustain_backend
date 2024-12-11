// src/Login.tsx
import React from 'react';

const Login: React.FC = () => {
    return (
        <div style={pageStyle}>
            <h2>Login</h2>
            <p>Please enter your credentials to log in.</p>
        </div>
    );
};

const pageStyle: React.CSSProperties = {
    padding: '20px',
};

export default Login;