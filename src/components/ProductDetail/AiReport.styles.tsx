import { Theme, css } from '@emotion/react';

export const reportContent = (theme: Theme) => css`
  padding: 32px;
  white-space: pre-line;
  line-height: 28px;
  font-weight: 500;
  color: ${theme.color.text};
`;

export const descriptionContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
`;

export const description = (theme: Theme) => css`
  padding-top: 16px;
  color: ${theme.color.primary};
  font-size: 14px;
  font-weight: 500;
`;

export const answer = css`
  font-size: 14px;
  font-weight: 500;
`;
