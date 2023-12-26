import { atom } from 'recoil';
import { Theme } from '../../types/theme';
import { getTheme } from '../../utils';

const themeState = atom<Theme>({
  key: 'themeState',
  default: getTheme(),
});

export default themeState;
