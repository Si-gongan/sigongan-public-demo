import { css } from '@emotion/react';

export const header = (hasBanner = true, isUp = false, scrollY = 0) => css`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: ${hasBanner ? '108px' : '60px'};
  padding-top: ${hasBanner ? '48px' : '0'};
  background: var(--background-base);
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
  padding: 8px 0;
  height: auto;
`;
