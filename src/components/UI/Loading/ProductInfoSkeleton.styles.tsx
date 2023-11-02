import { css } from '@emotion/react';
import * as productInfoStyle from '../../../components/ProductDetail/ProductInfo.styles';

export const container = css`
  ${productInfoStyle.container}
`;

export const imgWrapper = css`
  ${productInfoStyle.imgWrapper}
`;

export const img = css`
  ${productInfoStyle.img}
  aspect-ratio: 1/1;
  background: #f4f4f4;
`;

export const contentContainer = css`
  ${productInfoStyle.contentContainer}
`;

export const mainInfoContainer = css`
  ${productInfoStyle.mainInfoContainer}
  border-top: 2px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
`;

export const detailTitle = css`
  margin: 24px 0;
  width: 240px;
  height: 34px;
  background: #f4f4f4;
  max-width: 80%;
`;

export const detailPrice = css`
  width: 120px;
  height: 34px;
  background: #f4f4f4;
`;

export const metaContainer = css`
  padding: 20px 0 36px 0;
  border-bottom: 1px solid #f4f4f4;
`;

export const subTitle = css`
  ${productInfoStyle.subTitle}
  background: #f4f4f4;
  width: 72px;
  height: 26px;
`;

export const info = css`
  margin-top: 16px;
  background: #f4f4f4;
  height: 16px;
  width: 144px;
`;

export const actions = css`
  ${productInfoStyle.actions}
`;

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  width: 100%;
  height: 50px;
  background: #f4f4f4;
  border: 1px solid #f4f4f4;
`;
