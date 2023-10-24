import { css } from '@emotion/react';
import { BLUE } from '../../styles/theme';

export const container = css`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const imgWrapper = css`
  position: relative;
  width: 40%;
  flex-shrink: 0;
`;

export const contentContainer = css`
  width: 100%;
  flex: 1;
  padding-left: 48px;
`;

export const mainInfoContainer = css`
  flex-grow: 1;
  padding-bottom: 16px;
  border-top: 2px solid #333;
  border-bottom: 1px solid #ddd;
`;

export const detailTitle = css`
  padding: 24px 0;
  line-height: 32px;
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const detailPrice = css`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const metaContainer = css`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

export const subTitle = css`
  display: block;
  color: #000;
  margin-bottom: 12px;
  font-size: 16px;
`;

export const actions = css`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`;

const buttonStyles = {
  ok: css`
    background: #000;
    color: #fff;
    border: 1px solid #000;
    box-shadow: 10px 10px 16px 0 rgba(0, 0, 0, 0.2);
    &:hover {
      background: ${BLUE};
      border: 1px solid ${BLUE};
    }
  `,
  cancel: css`
    background: #fff;
    color: #000;
    border: 1px solid #ddd;
    &:hover {
      background: #fff;
      border: 1px solid #ddd;
    }
  `,
};

export const button = (type: 'cancel' | 'ok') => css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 25px;
  width: 100%;
  height: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${buttonStyles[type]}
`;
