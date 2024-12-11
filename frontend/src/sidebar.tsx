// src/Sidebar.tsx
import React from 'react';

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div style={{ ...sidebarStyle, display: isOpen ? 'block' : 'none' }}>
            <h3>Profile</h3>
            <ul>
                <li>Profile Info</li>
                <li>Settings</li>
                <li>Logout</li>
            </ul>
        </div>
    );
};

const sidebarStyle: React.CSSProperties = {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    transition: '0.3s',
};

export default Sidebar;