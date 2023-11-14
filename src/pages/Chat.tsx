import AIChat from '../components/AIChat/AIChat';
import ChatNavBar from '../components/AIChat/ChatNavBar';

const ChatPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        position: 'absolute',
      }}
    >
      <ChatNavBar />
      <AIChat />
    </div>
  );
};

export default ChatPage;
