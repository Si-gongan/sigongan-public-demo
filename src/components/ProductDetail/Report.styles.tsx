import { css } from '@emotion/react';

export const reportActions = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 32px;
  margin-bottom: 16px;
  border-top: 1px solid #ddd;
`;

export const reportButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 0 4px;
  background: #000;
  color: #fff;
  box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

export const reportContent = css`
  padding: 32px;
  white-space: pre-line;
  line-height: 28px;
  font-weight: 500;
`;
