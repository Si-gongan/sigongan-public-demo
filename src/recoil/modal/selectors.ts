import { selector } from 'recoil';
import modalState from './atom';

export const modalRepo = selector({
  key: 'modalRepo',
  get: ({ getCallback }) => {
    const closeModal = getCallback(({ set }) => async () => {
      set(modalState, false);
    });
    const openModal = getCallback(({ set }) => async () => {
      set(modalState, true);
    });
    return { closeModal, openModal };
  },
});
