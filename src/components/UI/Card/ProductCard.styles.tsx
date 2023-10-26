import { css } from '@emotion/react';

export const responsiveCard = css`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: calc(20% - 16px);
  margin: 8px;
  transition:
    box-shadow 0.25s ease-in,
    transform 0.25s ease-in;

  @media screen and (max-width: 1440px) {
    width: calc(25% - 16px);
    margin: 8px;
  }

  @media screen and (max-width: 1056px) {
    width: calc(33.3% - 16px);
    margin: 8px;
  }

  @media screen and (max-width: 767px) {
    width: calc(50% - 8px);
    margin: 4px;
  }
`;