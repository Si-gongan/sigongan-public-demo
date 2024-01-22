import { css } from '@emotion/react';

export const container = (isOpen: boolean) => css`
  margin-bottom: 32px;

  @media screen and (max-width: 767px) {
    height: ${isOpen ? 'auto' : '136px'};
    overflow-y: ${isOpen ? 'auto' : 'hidden'};
  }
`;

export const categories = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-items: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const btn = (isSelected: boolean) => css`
  display: flex;
  flex-direction: row;
  margin: 0;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-weight: 600;
  border-radius: 24px;
  cursor: pointer;
  border: 1.4px solid var(--border1);
  color: var(--text1);

  background: ${isSelected ? 'var(--chat-background)' : 'transparent'};

  &:active,
  :hover {
    background: var(--chat-background);
  }

  @media screen and (max-width: 767px) {
    border: none;
    flex-direction: column;
    padding: 0;
    background: transparent;

    &:active,
    :hover {
      background: transparent;
    }
  }
`;

export const categoryIcon = (isSelected: boolean) => css`
  font-size: 16px;
  margin-right: 2px;

  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    font-size: 24px;
    padding: 8px 12px;
    border-radius: 16px;
    margin-bottom: 4px;
    background: ${isSelected ? 'var(--border1)' : 'var(--chat-background)'};

    &:active,
    :hover {
      background: var(--border1);
    }
  }
`;

export const categoryText = css`
  font-size: 10px;

  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
`;

export const titleContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const title = css`
  font-size: 16px;
  padding: 16px 0;
  font-weight: 600;
  color: var(--text2);

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 16px 8px;
  }
`;

export const titleBtn = css`
  padding: 2px 8px;
  display: none;
  border: none;
  color: var(--color-gray-400);
  background: transparent;
  cursor: pointer;

  &:hover {
    color: var(--color-gray-500);
  }

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;
