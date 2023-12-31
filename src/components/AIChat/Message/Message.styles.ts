import { css } from '@emotion/react';

export const userContainer = css`
  padding: 32px 32px 24px 32px;
  outline: none;
`;

export const userText = css`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: var(--text-base);
`;

export const aiCard = css`
  border-radius: 18px;
  background-color: var(--chat-background);
`;

export const aiContainer = css`
  margin-bottom: 16px;
  outline: none;
`;

export const aiContent = css`
  padding: 24px 32px;
`;

export const loadingContent = css`
  display: flex;
  gap: 12px;
  align-items: center;
  color: var(--chat-primary3);
  font-size: 14px;
  padding: 24px 32px;
`;

export const aiText = css`
  white-space: pre-line;
  font-weight: 400;
  line-height: 28px;
  color: var(--text-base);
`;
