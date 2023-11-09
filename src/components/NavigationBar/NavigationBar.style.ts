import { Theme, css } from '@emotion/react';

export const header = (isUp: boolean, scrollY: number, theme: Theme) => css`
  position: sticky;
  top: 0;
  height: 72px;
  background: ${theme.color.background};
  z-index: 10;
  transition: transform 0.2s ease-in-out;
  transform: ${isUp || scrollY < 56 ? 'translateY(0)' : 'translateY(-100%)'};
  box-shadow: ${scrollY < 20 ? 'none' : '0 2px 4px 0 rgba(0, 0, 0, 0.1)'};
`;

export const navbar = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  align-items: center;
  padding: 16px 0;
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
export const navLogo = css`
  display: inline-block;
  height: 28px;
  vertical-align: middle;
  margin-right: 16px;
  font-weight: 700;
`;

export const imgLogo = css`
  width: 28px;
`;
