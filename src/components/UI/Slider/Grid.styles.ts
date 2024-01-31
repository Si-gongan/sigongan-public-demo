import { css } from '@emotion/react';

export const container = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1056px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const actions = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
`;

export const arrowBtn = css`
  width: 48px;
  height: 32px;
  border: 1px solid var(--border1);
  background: transparent;
  color: var(--color-gray-400);
  cursor: pointer;
`;

export const text = css`
  font-size: 14px;
  color: var(--color-gray-400);
  font-weight: 600;
  padding: 0 16px;
  width: 80px;
  text-align: center;
`;
