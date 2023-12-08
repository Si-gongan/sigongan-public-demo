/** @jsxImportSource @emotion/react */
import ChatInput from './ChatInput';
import Messages from './Messages';
import * as styles from './AIChat.styles';
import useChat from '../../hooks/useChat';

const AIChat: React.FC = () => {
  const {
    chatData,
    isLoading,
    error,
    userInputRef,
    submitHandler,
    clickQuestion,
  } = useChat();

  return (
    <main css={styles.main}>
      <div css={styles.chatContainer}>
        <Messages
          data={chatData}
          isLoading={isLoading}
          error={error}
          clickQuestion={clickQuestion}
        />
        <ChatInput
          inputRef={userInputRef}
          isLoading={isLoading}
          submitHandler={submitHandler}
        />
      </div>
    </main>
  );
};

export default AIChat;
