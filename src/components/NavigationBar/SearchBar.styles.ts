import { css } from '@emotion/react';

export const form = css`
  justify-content: center;
  align-items: center;
  min-width: 56px;
`;

export const inputContainer = css`
  display: flex;
  gap: 8px;
  padding: 4px 16px 4px 16px;
  border: 1px solid transparent;
  border-radius: 32px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const input = css`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid transparent;
  outline: none;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
`;
