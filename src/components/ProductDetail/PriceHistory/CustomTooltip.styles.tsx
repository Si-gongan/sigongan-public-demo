import { css } from '@emotion/react';
import { DiffType } from './CustomTooltip';

export const customTooltip = css`
  padding: 8px 12px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 12px;
`;

export const tooltipTitle = css`
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 700;
  color: #555;
`;

export const tooltipContent = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const price = css`
  font-weight: 700;
  color: #000;
`;

export const priceInfo = (diffType: DiffType) => css`
  font-size: 8px;
  font-weight: 700;
  color: ${diffType === 'same'
    ? '#ddd'
    : diffType === 'increment'
    ? '#fc6161'
    : '#5983fc'};
`;
