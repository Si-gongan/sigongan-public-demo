import { css } from '@emotion/react';

export const container = css`
  overflow-x: scroll;
`;

export const categories = css`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;

  @media screen and (max-width: 1056px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    width: fit-content;
    justify-content: center;
    padding: 0 8px;
  }
`;

export const btn = (isSelected: boolean) => css`
  width: 100%;
  height: 80px;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-weight: 500;
  color: var(--text1);
  background: transparent;
  border-radius: 24px;
  cursor: pointer;
  border: ${isSelected
    ? '2px solid var(--border1)'
    : '1.2px solid var(--border1)'};

  &:active,
  :hover {
    border: 2px solid var(--chat-primary1);
  }

  @media screen and (max-width: 767px) {
    width: 64px;
    height: 64px;
    padding: 0;
  }
`;

export const categoryIcon = css`
  font-size: 24px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;

export const categoryText = css`
  font-size: 10px;

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`;
