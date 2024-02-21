import { css } from '@emotion/react';

export const container = css`
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  background: var(--background-emp);
`;

export const description = css`
  padding: 0 16px;
  font-size: 10px;
  font-weight: 600;
  color: var(--text-emp);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const closeBtn = css`
  background: transparent;
  color: var(--text-emp);
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  margin-left: 4px;
  font-size: 10px;
`;

export const actions = css`
  padding: 0 8px;
  font-size: 10px;
  font-weight: 700;

  & a {
    background: var(--primary2);
    color: var(--text-emp);
    padding: 8px 12px;
    border-radius: 16px;
  }
`;
