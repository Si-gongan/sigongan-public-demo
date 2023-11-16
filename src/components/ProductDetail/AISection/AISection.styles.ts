import { css } from '@emotion/react';

export const content = css`
  padding: 32px;
  white-space: pre-line;
  line-height: 28px;
  font-weight: 500;
  color: var(--text-base);
`;

export const descriptionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
`;

export const description = css`
  padding-top: 16px;
  color: var(--text2);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  word-break: keep-all;
`;

export const answer = css`
  font-size: 14px;
  font-weight: 500;
`;
