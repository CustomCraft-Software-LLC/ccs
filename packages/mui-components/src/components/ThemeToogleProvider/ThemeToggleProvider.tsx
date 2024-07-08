import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Theme } from '@mui/material';

const ThemeToggleContext = React.createContext<() => void>(() => {});

interface ThemeToggleProviderProps { 
    children?: React.ReactNode;
    lightTheme: Theme;
    darkTheme: Theme;
}

export const ThemeToggleProvider: React.FC<ThemeToggleProviderProps> = ({ children, lightTheme, darkTheme }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = React.useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useToggleTheme = () => React.useContext(ThemeToggleContext);