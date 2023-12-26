import React from 'react';
import { useRecoilValue } from 'recoil';
import themeState from '../recoil/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { themeDark, themeLight } from '../styles/theme';
import { globalStyle } from '../styles/global';

interface Children {
  children: React.ReactNode;
}

const ThemeStateProvider: React.FC<Children> = (props) => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
      <Global styles={globalStyle} />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeStateProvider;
