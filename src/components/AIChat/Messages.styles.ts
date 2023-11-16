import { css } from '@emotion/react';

export const messagesContainer = css`
  padding: 0px 20px;
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
