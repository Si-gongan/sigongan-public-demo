import { atom } from 'recoil';
import { ChatMessage } from '../../types/chat';

const chatState = atom<ChatMessage[]>({
  key: 'chatState',
  default: [],
  dangerouslyAllowMutability: true, // 배열 아이템 추가 가능
});

export default chatState;
