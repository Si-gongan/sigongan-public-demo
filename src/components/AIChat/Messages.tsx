/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { ChatMessage } from '../../types/chat';
import * as styles from './Messages.styles';
import RecommendedProducts from './RecommendedProducts';
import { HashLoader } from 'react-spinners';

interface Props {
  data: ChatMessage[];
  isLoading: boolean;
}

const Messages: React.FC<Props> = (props) => {
  const { data, isLoading } = props;
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  return (
    <div css={styles.messagesContainer}>
      {/* TODO: 사전 질문 추천 */}
      {data.map((message) => {
        if (message.sender === 'user') {
          return (
            <div key={message.id} css={styles.userContainer}>
              <p css={styles.userText}>{message.text}</p>
            </div>
          );
        }
        if (message.sender === 'ai') {
          return (
            <div key={message.id} css={styles.aiContainer}>
              <div css={styles.aiCard}>
                <div css={styles.aiContent}>
                  <p css={styles.aiText}>{message.text}</p>
                  {message.products && (
                    <RecommendedProducts products={message.products} />
                  )}
                  {/* TODO: message.questions */}
                </div>
              </div>
            </div>
          );
        }
      })}
      {isLoading && (
        <div css={styles.aiContainer}>
          <div css={styles.aiCard}>
            <div css={styles.aiContent}>
              <HashLoader color="#333" loading size={24} />
            </div>
          </div>
        </div>
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default Messages;
