import { css } from '@emotion/react';

export const messageArea = css`
  width: 100%;
  position: absolute;
  top: 96px;
  left: 0;

  @media screen and (max-width: 767px) {
    top: 48px;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const text = css`
  text-align: center;
  padding: 16px 0;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-gray-500);
`;

export const actions = css`
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 16px 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const btnWrapper = css`
  height: 120px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 80px;
  }
`;

export const btn = css`
  width: 200px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  word-break: keep-all;

  background: var(--chat-background);
  border: 1px solid var(--chat-background);
  color: var(--chat-primary3);

  &:hover {
    background: var(--chat-primary1);
    border: 1px solid var(--chat-primary1);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 80px;
  }
`;
