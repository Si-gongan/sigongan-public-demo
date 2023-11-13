import { css } from '@emotion/react';

export const inputArea = css`
  width: 100%;
  padding: 0px 0px 24px 16px;
  flex-direction: column;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    height: 48px;
    background: linear-gradient(
      180deg,
      transparent 0,
      var(--background-base) 64%
    );
  }
`;

export const form = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;

export const inputContainer = css`
  flex-grow: 1;
`;

export const input = css`
  width: 100%;
  padding: 16px 24px;
  border-radius: 32px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-base);
  background: var(--background2);
  border: 1.6px solid var(--primary1);
  outline: none;
`;

export const submitBtn = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const icon = css`
  color: var(--primary1);
  &:hover {
    color: var(--primary2);
  }
`;
