import { css } from '@emotion/react';

export const header = (isUp: boolean, scrollY: number) => css`
  position: sticky;
  top: 0;
  height: 88px;
  background: #fff;
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
  margin-left: 16px;
  vertical-align: baseline;
`;

export const navLink = css`
  display: inline-block;
  height: 34px;
  vertical-align: middle;
  font-size: 32px;
  font-weight: 400;
  color: #c4c4c4;

  &:hover {
    color: #9fa7c3;
  }
`;
export const navLogo = css`
  display: inline-block;
  height: 34px;
  vertical-align: middle;
  margin-right: 16px;
  font-weight: 700;
  color: #000;
`;

export const imgLogo = css`
  width: 34px;
`;
