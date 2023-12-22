import { atom } from 'recoil';

const queryState = atom<string>({
  key: 'queryState',
  default: '',
});

export default queryState;
