/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from '../../types/chat';
import * as styles from './Messages.style';
import RecommendedProducts from './RecommendedProducts';
import { HashLoader } from 'react-spinners';
import MarkdownArea from '../UI/Markdown/MarkdownArea';
import RecommendedQuestions from './RecommendedQuestions';
import { useTheme } from '@emotion/react';

interface Props {
  data: ChatMessage[];
  isLoading: boolean;
  clickQuestion: (recommendedQuestion: string) => void;
}

const Messages: React.FC<Props> = (props) => {
  const { data, isLoading, clickQuestion } = props;
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const theme = useTheme();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    const lastAIMessage = data
      .slice()
      .reverse()
      .find((msg) => msg.sender === 'ai');
    if (lastAIMessage && 'questions' in lastAIMessage) {
      setQuestions(lastAIMessage.questions);
    }
  }, [data]);

  return (
    <div css={styles.messagesContainer}>
      {/* TODO: 사전 질문 추천 */}
      {/* 채팅 메시지 렌더링 */}
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
                  <MarkdownArea>{message.text}</MarkdownArea>
                  {message.products && (
                    <RecommendedProducts products={message.products} />
                  )}
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* 답변 로딩 중 */}
      {isLoading && (
        <div css={styles.aiContainer}>
          <div css={styles.aiCard}>
            <div css={styles.loadingContent}>
              <HashLoader color={theme.chatPrimary3} loading size={16} />
              <div>답변을 생성하고 있어요</div>
            </div>
          </div>
        </div>
      )}
      {/* 다음 질문 추천 */}
      {!isLoading && questions && (
        <RecommendedQuestions
          questions={questions}
          clickQuestion={clickQuestion}
        />
      )}
      <div ref={chatEndRef} />
    </div>
  );
};

export default Messages;
