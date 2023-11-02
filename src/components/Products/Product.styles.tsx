import { css } from '@emotion/react';

export const imageWrapper = css`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 8px;
`;

export const image = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 4px;
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
  margin: 0;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
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
  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`;
