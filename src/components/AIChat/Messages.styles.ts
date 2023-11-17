import { css } from '@emotion/react';

export const messagesContainer = css`
  position: relative;
  width: 100%;
  flex: 1;
  overflow-y: scroll;

  &::before {
    content: '';
    display: block;
    margin-top: -32px;
  }

  &::after {
    content: '';
    display: block;
    height: 48px;
  }
`;
