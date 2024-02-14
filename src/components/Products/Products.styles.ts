import { css } from '@emotion/react';

export const loaderContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 112px;
  margin-top: 32px;

  @media screen and (max-width: 767px) {
    margin: 40px 0 32px 0;
    height: 48px;
  }
`;

export const productsContainer = css`
  padding-top: 8px;
  margin-bottom: 16px;
  display: block;
`;
