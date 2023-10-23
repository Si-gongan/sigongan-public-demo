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
  padding: 8px;
`;

export const title = css`
  padding: 0;
  margin: 0;
  font-size: 14px;
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 8px;
  left: 8px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 700;
  background: #52a08d98;
  border: 1px solid transparent;
  color: #fff;
`;
