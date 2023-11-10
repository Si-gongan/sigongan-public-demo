import React, { useEffect, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { themeDark, themeLight } from '../styles/theme';
import { globalStyle } from '../styles/global';

interface ContextModel {
  toggleTheme: () => void;
}

interface Children {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ContextModel>({
  toggleTheme: () => {},
});

const ThemeContextProvider: React.FC<Children> = (props) => {
  const localStorageTheme = localStorage.getItem('theme');
  const initialTheme =
    (localStorageTheme && localStorageTheme === 'dark') || false;
  const [isDark, setIsDark] = useState<boolean>(initialTheme);

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  const contextValue: ContextModel = {
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <Global styles={globalStyle} />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
