/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from '../../types/chat';
import * as styles from './Messages.styles';
import RecommendedQuestions from './RecommendedQuestions';
import MessageUser from './Message/MessageUser';
import MessageAI from './Message/MessageAI';
import MessageLoading from './Message/MessageLoading';
import MessageError from './Message/MessageError';
import ChatInstruction from './Message/Instruction';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import { AxiosError } from 'axios';

interface Props {
  data: ChatMessage[];
  isLoading: boolean;
  error: AxiosError | null;
  clickQuestion: (recommendedQuestion: string) => void;
}

const Messages: React.FC<Props> = (props) => {
  const { data, isLoading, error, clickQuestion } = props;
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const answerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const findLastAIMessage = (data: ChatMessage[]) => {
    return data
      .slice()
      .reverse()
      .find((msg) => msg.sender === 'ai');
  };

  useEffect(() => {
    scrollToBottom();
    const lastAIMessage = findLastAIMessage(data);
    if (lastAIMessage && 'questions' in lastAIMessage) {
      setQuestions(lastAIMessage.questions);
    }
  }, [data]);

  return (
    <div css={styles.messagesContainer}>
      <ResponsiveContainer>
        <div css={styles.content}>
          {/* 시작 화면 */}
          {data.length === 0 && (
            <ChatInstruction clickQuestion={clickQuestion} />
          )}
          {/* 이전 채팅 메시지 */}
          {data.map((message, index) =>
            message.sender === 'user' ? (
              <MessageUser key={message.id} text={message.text} />
            ) : (
              <MessageAI
                key={message.id}
                text={message.text}
                products={message.products}
                answerRef={index === data.length - 1 ? answerRef : undefined}
              />
            )
          )}
          {/* 답변 로딩 중 */}
          {isLoading && <MessageLoading />}
          {/* 에러 발생 */}
          {error && <MessageError />}
          {/* 다음 질문 추천 */}
          {!isLoading && questions && (
            <RecommendedQuestions
              questions={questions}
              clickQuestion={clickQuestion}
            />
          )}
          <div ref={chatEndRef} />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Messages;
