import { css } from '@emotion/react';

export const header = css`
  border-bottom: 1px solid #eee;
  height: 88px;
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
  color: #666;

  &:hover {
    color: #424242;
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
