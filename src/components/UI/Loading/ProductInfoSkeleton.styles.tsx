import { css } from '@emotion/react';

export const container = css`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const imgWrapper = css`
  position: relative;
  padding: 28px;
  width: 40%;
  flex-shrink: 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 16px;
  }
`;

export const img = css`
  width: 100%;
  aspect-ratio: 1/1;
  background: #eee;
`;

export const contentContainer = css`
  width: 100%;
  flex: 1;
  padding-left: 48px;

  @media screen and (max-width: 767px) {
    padding-left: 0;
  }
`;

export const mainInfoContainer = css`
  flex-grow: 1;
  padding-bottom: 16px;
  border-top: 2px solid #eee;
  border-bottom: 1px solid #eee;
`;

export const detailTitle = css`
  margin: 24px 0;
  width: 240px;
  height: 34px;
  background: #eee;
  max-width: 80%;
`;

export const detailPrice = css`
  width: 120px;
  height: 34px;
  background: #eee;
`;

export const metaContainer = css`
  padding: 20px 0 36px 0;
  border-bottom: 1px solid #eee;
`;

export const subTitle = css`
  display: block;
  margin-bottom: 12px;
  background: #eee;
  width: 72px;
  height: 26px;
`;

export const info = css`
  margin-top: 16px;
  background: #eee;
  height: 16px;
  width: 144px;
`;

export const actions = css`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`;

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  width: 100%;
  height: 50px;
  background: #eee;
  border: 1px solid #eee;
`;
