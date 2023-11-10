import { Theme, css } from '@emotion/react';

export const globalStyle = (theme: Theme) => css`
  body {
    background: ${theme.backgroundBase};
  }

  :root {
    --background-base: ${theme.backgroundBase};
    --background1: ${theme.background1};
    --background2: ${theme.background2};
    --background3: ${theme.background3};
    --background-emp: ${theme.backgroundEmp};
    --text-base: ${theme.textBase};
    --text1: ${theme.text1};
    --text2: ${theme.text2};
    --text3: ${theme.text3};
    --text4: ${theme.text4};
    --text-emp: ${theme.textEmp};
    --accent1: ${theme.accent1};
    --accent2: ${theme.accent2};
    --border-base: ${theme.borderBase};
    --border1: ${theme.border1};
    --border2: ${theme.border2};
    --primary1: ${theme.primary1};
    --primary2: ${theme.primary2};
    --increment: ${theme.increment};
    --decrement: ${theme.decrement};
  }
`;
