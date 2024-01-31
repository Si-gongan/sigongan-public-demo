import { css } from '@emotion/react';

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 320px;
  max-width: calc(100vw - 40px);
  max-height: 480px;
  border: 1px solid var(--border-base);
  border-radius: 24px;
  background-color: var(--background2);
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1);
`;

export const navBtn = css`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text3);
  border-radius: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  text-align: left;

  &:hover {
    background: var(--chat-background);
  }
`;

export const link = css`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const backBtn = css`
  width: fit-content;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text3);
  border-radius: 16px;
  cursor: pointer;
  background: transparent;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`;

export const emBtn = css`
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--chat-primary3);
  border-radius: 16px;
  cursor: pointer;

  ::before {
    content: '▶️ ';
  }

  &:hover {
    background: var(--chat-primary1);
  }
`;

export const content = css`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--text3);
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background: var(--chat-background);
  }
`;

export const textContainer = css`
  overflow-y: scroll;
`;

export const text = css`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text3);
  line-height: 24px;

  & h3 {
    padding-top: 18px;
    padding-bottom: 6px;
  }
`;

export const bottomArea = css`
  margin: 8px 12px 0 12px;
  padding: 10px 0;
  border-top: 1px solid var(--border1);
`;

export const externalLink = css`
  margin-right: 12px;
  color: var(--text4);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
