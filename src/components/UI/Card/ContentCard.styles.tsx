import { Theme, css } from '@emotion/react';

export const contentCard = (theme: Theme) => css`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  background: ${theme.card.background};
`;
