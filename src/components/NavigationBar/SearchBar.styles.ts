import { css } from '@emotion/react';

export const form = css`
  justify-content: center;
  align-items: center;
  min-width: 56px;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px 4px 16px;
  background: var(--background2);
  border: 1px solid var(--border-base);
  border-radius: 32px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const label = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

export const input = css`
  flex-grow: 1;
  padding: 4px;
  background: transparent;
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: var(--text-base);

  &::placeholder {
    color: var(--text4);
    font-size: 12px;
    transform: translateY(-2px);
  }
`;

export const clearButton = css`
  display: flex;
  height: fit-content;
  background: var(--background3);
  color: var(--background2);
  border: 1px solid transparent;
  border-radius: 100%;
  padding: 2px;
  cursor: pointer;
`;
