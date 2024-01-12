import { css } from '@emotion/react';

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  word-break: keep-all;

  & h2 {
    font-weight: 700;
    line-height: 48px;
  }

  & p {
    font-weight: 600;
    color: var(--text3);
    line-height: 32px;
  }
`;

export const title = css`
  padding-top: 8px;

  & img {
    width: 48px;
  }
`;

export const actions = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  margin-top: 8px;
  border-radius: 16px;
  background: var(--chat-primary3);
  color: #fff;
  font-weight: 700;
  font-size: 20px;

  & a {
    width: 100%;
    text-align: center;
  }
`;

export const underlineBtn = css`
  text-decoration: underline;
  margin-top: 16px;
  color: var(--text4);
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
