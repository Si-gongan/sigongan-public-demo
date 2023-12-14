import { css } from '@emotion/react';

export const main = css`
  max-width: 1056px;
  margin: 0 auto;

  @media screen and (max-width: 1056px) {
    width: 784px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const title = css`
  font-size: 16px;
  padding: 16px 0;
  font-weight: 600;
  color: var(--text2);

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 16px 8px;
  }
`;
