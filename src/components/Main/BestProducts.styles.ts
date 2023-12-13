import { css } from '@emotion/react';

export const center = css`
  margin: 0 auto;
`;

export const productsArea = css`
  max-width: 1024px;
  padding: 16px 0;
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
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
`;

export const productsContainer = css`
  position: relative;
  padding: 0 32px;
`;

export const products = css`
  width: 100%;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin: 16px 0;
  padding-bottom: 16px;
`;

export const scrollBtn = (direction: 'left' | 'right') => css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 100%;
  border: 1px solid var(--border-base);
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1);
  background: var(--background2);
  color: var(--text3);
  cursor: pointer;
  top: 120px;
  ${direction === 'left' ? 'left: 0' : 'right: 0'};
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
  color: var(--text2);
`;

export const name = css`
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
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
  font-weight: 700;
  border: 1px solid transparent;
`;
