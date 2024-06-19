import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

const ThemeToggleContext = React.createContext();

interface ThemeToggleProviderProps { 
    children?: React.ReactNode;
}

export const ThemeToggleProvider: React.FC<ThemeToggleProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
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