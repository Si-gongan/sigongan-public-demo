import { css } from '@emotion/react';

export const metaContainer = css`
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
`;

export const metaList = css`
  display: flex;
  margin-bottom: 8px;
`;

export const metaListTitle = css`
  display: inline-block;
  flex-shrink: 0;
  width: 96px;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-gray-500);
  vertical-align: middle;
`;

export const metaListText = css`
  position: relative;
  flex-grow: 1;
  font-size: 14px;
  line-height: 24px;
  color: var(--text2);
`;
