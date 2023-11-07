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

export const clearButton = (buttonVisible: boolean) => css`
  display: flex;
  height: fit-content;
  background: #e4e4e4;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 100%;
  padding: 2px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: ${buttonVisible ? '1' : '0'};
  pointer-events: ${buttonVisible ? '' : 'none'};
`;