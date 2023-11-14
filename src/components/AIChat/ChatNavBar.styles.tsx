import { css } from '@emotion/react';

export const header = css`
  position: relative;
  top: 0;
  height: 72px;
  background: var(--background-base);
  z-index: 10;
`;

export const navbar = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-items: center;
  padding: 16px 0;
  height: 72px;

  @media screen and (max-width: 767px) {
    padding: 12px 0;
  }
`;

export const navMenu = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const navItem = css`
  margin-left: 12px;
  vertical-align: baseline;
`;

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

export const searchBarWrapper = css`
  flex-grow: 1;
`;
