import { Theme, css } from '@emotion/react';
import { DiffType } from './CustomTooltip';

export const customTooltip = (theme: Theme) => css`
  padding: 8px 12px;
  border: 1px solid ${theme.color.border};
  background: ${theme.color.background};
  font-size: 12px;
`;

export const tooltipTitle = (theme: Theme) => css`
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 700;
  color: ${theme.color.secondary};
`;

export const tooltipContent = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const price = (theme: Theme) => css`
  font-weight: 700;
  color: ${theme.color.text};
`;

export const priceInfo = (diffType: DiffType, theme: Theme) => css`
  font-size: 8px;
  font-weight: 700;
  color: ${diffType === 'same'
    ? theme.color.muted
    : diffType === 'increment'
    ? '#fc6161'
    : '#5983fc'};
`;
