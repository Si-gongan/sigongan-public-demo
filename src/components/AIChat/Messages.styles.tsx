import { css } from '@emotion/react';

export const messagesContainer = css`
  padding: 0px 20px;
  width: 100%;
  flex: 1;
  overflow-y: scroll;

  &::after {
    content: '';
    display: block;
    height: 48px;
  }
`;

export const userContainer = css`
  padding: 24px 32px;
`;

export const userText = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--text-base);
`;

export const assistantCard = css`
  border-radius: 18px;
  background-color: var(--chat-background);
`;

export const assistantContainer = css`
  margin-bottom: 16px;
`;

export const assistantContent = css`
  padding: 24px 32px;
`;

export const assistantText = css`
  white-space: pre-line;
  font-weight: 400;
  line-height: 28px;
  color: var(--text-base);
`;
