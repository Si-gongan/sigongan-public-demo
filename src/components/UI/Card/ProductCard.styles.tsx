import { css } from '@emotion/react';

export const responsiveCard = (isLoading: boolean = false) => css`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background: var(--background1);
  width: calc(20% - 16px);
  margin: 8px;
  transition: transform 0.3s ease-in-out;
  pointer-events: ${isLoading ? 'none' : 'auto'};

  ${!isLoading &&
  `&:hover {
    transform: translateY(-4px);
  }`}

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
