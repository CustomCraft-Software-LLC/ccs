import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavButtonProps { 
    nextLink?: string;
    children?: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ nextLink = '/', children }) => { 
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(nextLink);
    };

    return ( 
        <button onClick={handleClick} style={{ display: 'flex', alignItems: 'center' }}>
            {children}
        </button>
    );
}

export default NavButton;