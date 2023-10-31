/** @jsxImportSource @emotion/react */
import { TooltipProps } from 'recharts';
import * as styles from './CustomTooltip.styles';

export type DiffType = 'increment' | 'decrement' | 'same';

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { price, createdAt, diff } = payload[0].payload;
    const title = `
      ${createdAt.substring(4, 6)}월 
      ${createdAt.substring(6, 8)}일 
      가격 정보
    `;
    const priceText = `${price.toLocaleString()}원`;

    let diffText = '';
    let diffType: DiffType = 'same';
    if (diff > 0) {
      diffText = `▲ ${diff.toLocaleString()}원`;
      diffType = 'increment';
    } else if (diff < 0) {
      diffText = `▼ ${(-diff).toLocaleString()}원`;
      diffType = 'decrement';
    } else {
      diffText = '( -- )';
    }

    return (
      <div css={styles.customTooltip}>
        <h3 css={styles.tooltipTitle}>{title}</h3>
        <div css={styles.tooltipContent}>
          <div css={styles.price}>{priceText}</div>
          <div css={styles.priceInfo(diffType)}>{diffText}</div>
        </div>
      </div>
    );
  }
};

export default CustomTooltip;
