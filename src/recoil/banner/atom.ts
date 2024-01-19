import { atom } from 'recoil';

const bannerState = atom<boolean>({
  key: 'bannerState',
  default: true,
});

export default bannerState;
