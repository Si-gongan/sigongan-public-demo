import { css } from '@emotion/react';

export const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1; // TODO: backdrop 말고 외부 모든 버튼 클릭시 닫히도록 변경
`;

export const container = css`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media screen and (max-width: 767px) {
    bottom: 24px;
    right: 24px;
  }
`;

export const btnContainer = css`
  padding-top: 16px;
`;

export const btn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid var(--border-base);
  border-radius: 100%;
  background-color: var(--background2);
  color: var(--text3);
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  font-weight: 600;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: var(--text3);
  }
`;
