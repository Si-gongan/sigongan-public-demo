import { css } from '@emotion/react';

export const container = css`
  width: 1728px;
  margin: 0 auto;

  @media screen and (max-width: 1919px) {
    width: 1376px;
  }

  @media screen and (max-width: 1440px) {
    width: 1024px;
  }

  @media screen and (max-width: 1056px) {
    width: calc(100% - 40px);
  }
`;
