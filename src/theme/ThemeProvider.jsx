import { useState, useMemo, createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

// Create a context for the theme
const ThemeContext = createContext();

/**
 * CustomThemeProvider: A theme provider component that wraps the application and provides
 * a theme toggle functionality.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @return {JSX.Element} The rendered component.
 */
// eslint-disable-next-line react/prop-types
const CustomThemeProvider = ({ children }) => {
  // State to track the current theme mode
  const [mode, setMode] = useState('light');

  /**
   * Toggle the theme mode between light and dark.
   *
   * @return {void}
   */
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Memoize the theme based on the mode
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  // Render the theme provider with the theme and toggle functionality
  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

/**
 * useThemeContext: A custom hook to access the theme context.
 *
 * @return {Object} The theme context.
 */
const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a CustomThemeProvider');
  }
  return context;
};

// Export the custom theme provider and useThemeContext hook
export { CustomThemeProvider, useThemeContext };

