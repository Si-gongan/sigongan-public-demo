import { css } from '@emotion/react';

export const main = css`
  height: calc(100% - 72px); // nav bar 제외
  width: 100%;
  flex: 1;
`;

export const chatContainer = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
`;
