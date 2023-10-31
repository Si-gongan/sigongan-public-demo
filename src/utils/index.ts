import { History } from '../types/product';

export const truncateText = (text: string, length: number): string => {
  if (text.length <= length) {
    return text;
  }
  return `${text.slice(0, length)} ...`;
};

export const calculatePriceDiff = (data: History[]) => {
  let prevPrice = 0;
  return data.map((item, index) => {
    const diff = index !== 0 ? item.price - prevPrice : 0;
    prevPrice = item.price;
    return { ...item, diff };
  });
};
