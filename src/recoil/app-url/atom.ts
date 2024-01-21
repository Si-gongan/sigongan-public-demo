import { atom } from 'recoil';
import { getAppUrl } from '../../utils';

const appUrlState = atom<string>({
  key: 'appUrlState',
  default: getAppUrl(),
});

export default appUrlState;
