import { css } from '@emotion/react';

export const thumbnail = css`
  width: 100%;
  height: 200px;
  object-fit: cover;
  padding: 8px;
  border-radius: 16px;
`;

export const content = css`
  flex-grow: 1;
  position: relative;
  padding: 4px 16px;
`;

export const title = css`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 500;
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 8px;
  left: 16px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  border: 1px solid transparent;
  color: #333;
`;
