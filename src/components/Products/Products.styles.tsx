import { css } from '@emotion/react';

export const productsContainer = css`
  padding: 16px;
`;

export const ulStyle = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-items: center;
  gap: 16px;
  padding: 0;
  margin: 0;
  list-style: none;
`;
