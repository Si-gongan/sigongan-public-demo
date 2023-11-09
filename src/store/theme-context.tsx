import React, { useState } from 'react';
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
  const [isDark, setIsDark] = useState<boolean>(false);

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
