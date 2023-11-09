import { css } from '@emotion/react';

export const container = css`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 999;

  @media screen and (max-width: 767px) {
    bottom: 24px;
    right: 24px;
  }
`;

export const btn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 100%;
  background-color: #fff;
  color: #333;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: #555;
  }
`;
