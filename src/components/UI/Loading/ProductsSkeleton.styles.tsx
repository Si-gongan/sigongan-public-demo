import { css } from '@emotion/react';

export const imageWrapper = css`
  width: 92%;
  aspect-ratio: 1/1;
  margin: 4%;
  background: #eee;
  border-radius: 4px;
`;

export const image = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const contentTitle = css`
  flex-grow: 1;
  position: relative;
  padding: 4px 16px;
  height: 80px;
  overflow: hidden;
`;

export const contentPrice = css`
  position: relative;
  padding: 4px 16px;
  height: 40px;
`;

export const title = css`
  padding: 0;
  margin-top: 8px;
  width: 80%;
  height: 22px;
  background: #eee;
  border-radius: 4px;
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 8px;
  left: 16px;
  border-radius: 4px;
  background: #eee;
  height: 28px;
  width: 40%;
`;
