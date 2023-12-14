import { css } from '@emotion/react';

export const center = css`
  margin: 0 auto;
`;

export const productsArea = css`
  max-width: 1024px;
  padding: 8px 0 32px 0;
  margin: 0 auto;

  @media screen and (max-width: 1056px) {
    width: 784px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const title = css`
  color: var(--text2);
  font-size: 24px;
  text-align: center;
  padding-bottom: 16px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const card = css`
  margin: 0 8px;
  border-radius: 12px;
  border: none;
  background: var(--background-base);
  cursor: pointer;
`;

export const link = css`
  width: 100%;
`;

export const product = css`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 100%;
`;

export const imageWrapper = css`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 8px;
`;

export const image = css`
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  border-radius: 8px;
`;

export const contentTitle = css`
  flex-grow: 1;
  position: relative;
  padding: 4px 16px;
  height: 68px;
  overflow: hidden;
  color: var(--text3);
`;

export const name = css`
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
`;

export const contentPrice = css`
  position: relative;
  padding: 4px 16px;
  height: 36px;
  color: var(--text2);
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 8px;
  left: 16px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  border: 1px solid transparent;
`;
