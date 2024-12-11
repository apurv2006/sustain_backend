import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar.tsx';
import Sidebar from './sidebar';
import ProfileButton from './ProfileButton.tsx';
import LandingPage from './LandingPage/LandingPage.tsx';
import AboutUs from './Navbar/AboutUs.tsx';
import Login from './Navbar/Login.tsx';
import ForBusiness from './Navbar/ForBussiness.tsx';
import ForCustomer from './Navbar/ForCustomer.tsx';

const App: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar isOpen={isSidebarOpen} />
                <div style={{ marginLeft: isSidebarOpen ? '220px' : '20px', flex: 1 }}>
                    <ProfileButton onClick={toggleSidebar} />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/for-business" element={<ForBusiness />} />
                        <Route path="/for-customer" element={<ForCustomer />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;