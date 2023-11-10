import { css } from '@emotion/react';

export const switchers = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 32px;
  margin-bottom: 16px;

  & button {
    background: var(--background-emp);
    color: var(--text-emp);
    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, 0.2);
    border: 1px solid var(--background-emp);
  }
`;

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 0 4px;
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const contentContainer = css`
  padding-top: 16px;
`;
