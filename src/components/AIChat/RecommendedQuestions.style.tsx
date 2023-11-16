import { css } from '@emotion/react';

export const wrapper = css`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 32px;
  margin-bottom: 16px;

  /* @media screen and (max-width: 767px) {
    flex-direction: column;
    padding: 0;
  } */
`;

export const btn = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;
  background: var(--chat-background);
  border: 1px solid var(--chat-background);
  color: var(--chat-primary3);

  &:hover {
    background: var(--chat-primary1);
    border: 1px solid var(--chat-primary1);
  }
`;
