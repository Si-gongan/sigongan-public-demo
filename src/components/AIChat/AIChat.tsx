/** @jsxImportSource @emotion/react */
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import ChatInput from './ChatInput';
import Messages from './Messages';
import * as styles from './AIChat.styles';
import useChat from '../../hooks/useChat';

const AIChat: React.FC = () => {
  const { chatData, isLoading, submitHandler, userInputRef } = useChat();

  return (
    <main css={styles.main}>
      <ResponsiveContainer>
        <div css={styles.chatContainer}>
          <Messages data={chatData} isLoading={isLoading} />
          <ChatInput
            inputRef={userInputRef}
            isLoading={isLoading}
            submitHandler={submitHandler}
          />
        </div>
      </ResponsiveContainer>
    </main>
  );
};

export default AIChat;
