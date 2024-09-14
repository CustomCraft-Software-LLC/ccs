import React from 'react';
import { Theme } from '@mui/material';
interface ThemeToggleProviderProps {
    children?: React.ReactNode;
    lightTheme: Theme;
    darkTheme: Theme;
}
export declare const ThemeToggleProvider: React.FC<ThemeToggleProviderProps>;
export declare const useToggleTheme: () => () => void;
export {};
