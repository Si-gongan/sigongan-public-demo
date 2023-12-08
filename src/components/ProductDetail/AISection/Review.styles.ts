import { css } from '@emotion/react';

export const container = css`
  padding: 32px;
  outline: none;
`;

export const answerContainer = css`
  display: flex;
  flex-direction: row;
  flex: 1;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const prosAndCons = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;

  @media screen and (max-width: 767px) {
    align-items: start;
  }
`;

export const title = css`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 0;
  margin-bottom: 12px;
  color: var(--chat-primary3);
  font-size: 14px;
  font-weight: 600;
`;

export const list = css`
  padding: 8px 0;
  margin-bottom: 16px;

  & li {
    margin-left: 24px;
    list-style: disc;
    padding: 4px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text3);
  }
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
