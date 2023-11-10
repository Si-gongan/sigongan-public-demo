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

export const setThemeColor = () => {
  const initalThemeColor =
    localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
      ? '#121212'
      : '#ffffff';
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', initalThemeColor);
};
