import React, { createContext, useContext, useState } from 'react';

interface NavContextProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    

    return (
        <NavContext.Provider value={{ isMobileMenuOpen, toggleMobileMenu }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    const context = useContext(NavContext);
    if (context === undefined) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};