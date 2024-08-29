import React from 'react';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';

// Context to provide the theme toggle function
const ThemeToggleContext = React.createContext<() => void>(() => {});

// Props for the ThemeToggleProvider
interface ThemeToggleProviderProps {
  children?: React.ReactNode;
  lightTheme: Theme;
  darkTheme: Theme;
}

// Provider component to manage and toggle themes
export const ThemeToggleProvider: React.FC<ThemeToggleProviderProps> = ({ children, lightTheme, darkTheme }) => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  // Function to toggle between light and dark themes
  const toggleTheme = React.useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  // Determine the current theme based on the mode
  const theme = React.useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode, darkTheme, lightTheme]);

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

// Custom hook to use the theme toggle function
export const useToggleTheme = () => React.useContext(ThemeToggleContext);