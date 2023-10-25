import { css } from '@emotion/react';

export const card = (width?: string, height?: string, maxWidth?: string) => css`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: ${width};
  height: ${height};
  max-width: ${maxWidth};
`;
