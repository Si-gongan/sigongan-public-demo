/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AIChat from '../components/AIChat/AIChat';
import ChatNavBar from '../components/NavigationBar/ChatNavBar';

const page = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const ChatPage: React.FC = () => {
  return (
    <div css={page}>
      <ChatNavBar />
      <AIChat />
    </div>
  );
};

export default ChatPage;
