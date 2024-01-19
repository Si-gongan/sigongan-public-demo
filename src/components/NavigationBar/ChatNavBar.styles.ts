import { css } from '@emotion/react';

export const navMenu = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const navItem = css`
  margin-left: 12px;
  vertical-align: baseline;
`;

export const navLink = css`
  display: inline-block;
  height: 28px;
  vertical-align: middle;
  font-size: 26px;
  font-weight: 400;
  color: var(--color-gray-300);

  &:hover {
    color: var(--color-gray-200);
  }
`;
