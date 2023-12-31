import { css } from '@emotion/react';
import * as productStyle from '../../Products/Product.styles';

export const imageWrapper = css`
  ${productStyle.imageWrapper}
  background: transparent;
`;

export const image = css`
  ${productStyle.image}
  background: #f4f4f4;
`;

export const contentTitle = css`
  ${productStyle.contentTitle}
`;

export const contentPrice = css`
  ${productStyle.contentPrice}
`;

export const title = css`
  padding: 0;
  margin: 0;
  margin-top: 4px;
  width: 80%;
  height: 20px;
  background: #f4f4f4;
  border-radius: 4px;
`;

export const priceWrapper = css`
  position: absolute;
  bottom: 12px;
  left: 16px;
  width: 40%;
  height: 28px;
  background: #f4f4f4;
  border-radius: 4px;
`;
