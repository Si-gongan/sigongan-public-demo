// 이제 사용하지 않는 파일

import { css } from '@emotion/react';

export const container = css`
  position: relative;
  padding: 0 32px;
`;

export const items = css`
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
