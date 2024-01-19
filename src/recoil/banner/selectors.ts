import { selector } from 'recoil';
import bannerState from './atom';

export const bannerRepo = selector({
  key: 'bannerRepo',
  get: ({ getCallback }) => {
    const closeBanner = getCallback(({ set }) => async () => {
      set(bannerState, false);
    });
    const openBanner = getCallback(({ set }) => async () => {
      set(bannerState, true);
    });
    return { closeBanner, openBanner };
  },
});
