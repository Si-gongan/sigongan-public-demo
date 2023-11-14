import { css } from '@emotion/react';

export const card = css`
  width: 180px;
  border-radius: 12px;
  background: var(--background-base);
  border: 1px solid var(--border1);
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 112px;
  }
`;

export const link = css`
  width: 100%;
`;

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: row;
  }
`;

export const imageWrapper = css`
  width: 100%;
  aspect-ratio: 1/1;
  padding: 8px;

  @media screen and (max-width: 767px) {
    width: auto;
    height: 100%;
  }
`;

export const image = css`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 8px;
`;

export const infoContainer = css`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 112px;
    padding-top: 4px;
  }
`;

export const contentTitle = css`
  flex-grow: 1;
  position: relative;
  padding: 4px 16px;
  height: 64px;
  overflow: hidden;
  color: var(--text2);

  @media screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const contentPrice = css`
  position: relative;
  padding: 4px 16px;
  height: 36px;
  color: var(--text2);
`;

export const title = css`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 8px;
  left: 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  border: 1px solid transparent;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;
