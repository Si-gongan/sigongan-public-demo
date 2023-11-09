import { Theme, css } from '@emotion/react';

export const globalStyle = (theme: Theme) => css`
  body {
    background: ${theme.color.background};
  }
  /* TODO: 아래 형식으로 리팩토링 */
  :root {
    --skeleton-color: ${theme.color.border};
  }
`;
