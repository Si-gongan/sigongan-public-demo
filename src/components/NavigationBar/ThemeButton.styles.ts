import { css } from '@emotion/react';

export const navBtn = css`
  display: inline-block;
  height: 28px;
  vertical-align: middle;
  font-size: 26px;
  font-weight: 400;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-gray-300);

  &:hover {
    color: var(--color-gray-200);
  }
`;
