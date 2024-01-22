import { Theme } from '../types/theme';

export const setThemeColor = () => {
  const initialThemeColor =
    localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark'
      ? '#121212'
      : '#ffffff';
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', initialThemeColor);
};

export const getTheme = () => {
  const localStorageTheme = localStorage.getItem('theme');
  let theme: Theme = 'light';
  if (localStorageTheme && localStorageTheme === 'dark') {
    theme = 'dark';
  }
  return theme;
};
