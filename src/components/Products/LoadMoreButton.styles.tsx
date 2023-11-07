import { css } from '@emotion/react';

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  @media screen and (max-width: 767px) {
    margin: 32px 0 16px 0;
    height: auto;
  }
`;

export const btn = css`
  padding: 8px 16px;
  margin: 0 4px;
  background: #000;
  color: #fff;
  box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #000;
  border-radius: 32px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const descriptionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
`;

export const description = css`
  padding-top: 16px;
  color: #333;
  font-size: 14px;
  font-weight: 500;
`;
