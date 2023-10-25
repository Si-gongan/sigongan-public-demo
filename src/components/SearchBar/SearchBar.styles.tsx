import { css } from '@emotion/react';

export const form = css`
  /* padding: 16px; */
`;

export const inputContainer = css`
  display: flex;
  gap: 8px;
  padding: 4px 4px 4px 24px;
  background: #fff;
  border: 1px solid transparent;
  border-radius: 32px;
  font-size: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);

  & input {
    flex-grow: 1;
  }
`;

export const input = css`
  padding: 8px;
  background: transparent;
  border: 1px solid transparent;
  outline: none;
`;

export const searchButton = css`
  background: #5983fc;
  border: 1px solid transparent;
  border-radius: 32px;
  padding: 0 20px;
  box-shadow: 0 1px 4px #5983fc98;
  cursor: pointer;
`;

export const icon = css`
  color: #fff;
  vertical-align: bottom;
`;
