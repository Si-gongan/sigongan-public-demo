import { css } from '@emotion/react';

export const content = css`
  /* padding: 32px; */
  white-space: pre-line;
  line-height: 28px;
  font-weight: 500;
  color: var(--text-base);
`;

export const answerContainer = css`
  padding: 32px;
  outline: none;
`;

export const descriptionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  outline: none;
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

export const actions = css`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 16px;
`;

export const btn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 4px 10px 4px;
  border-radius: 16px;
  font-weight: 500;
  font-size: 12px;
  background: var(--background-base);
  border: 1.2px solid var(--text4);
  color: var(--text4);
  cursor: pointer;
`;
