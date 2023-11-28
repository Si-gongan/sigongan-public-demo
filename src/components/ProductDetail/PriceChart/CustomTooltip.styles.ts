import { css } from '@emotion/react';

export const customTooltip = css`
  padding: 4px 12px;
  border: 1px solid var(--border1);
  background: var(--background-base);
  font-size: 12px;
`;

export const tooltipTitle = css`
  font-size: 12px;
  margin-bottom: 0;
  font-weight: 700;
  color: var(--text3);
`;

export const tooltipContent = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const price = css`
  font-weight: 700;
  color: var(--text-base);
`;

// function to key
export const priceInfo = {
  same: css`
    font-size: 8px;
    font-weight: 700;
    color: var(--text4);
  `,
  increment: css`
    font-size: 8px;
    font-weight: 700;
    color: var(--increment);
  `,
  decrement: css`
    font-size: 8px;
    font-weight: 700;
    color: var(--decrement);
  `,
};
