/** @jsxImportSource @emotion/react */
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import ChatInput from './ChatInput';
import Messages from './Messages';
import * as styles from './AIChat.styles';
import useChat from '../../hooks/useChat';

const AIChat: React.FC = () => {
  const { chatData, isLoading, userInputRef, submitHandler, clickQuestion } =
    useChat();

  return (
    <main css={styles.main}>
      <ResponsiveContainer>
        <div css={styles.chatContainer}>
          <Messages
            data={chatData}
            isLoading={isLoading}
            clickQuestion={clickQuestion}
          />
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
