/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import aiApi from '../../api/axios/ai/api';
import ResponsiveContainer from '../UI/Layout/ResponsiveContainer';
import ChatInput from './ChatInput';
import {
  AssistantMessage,
  ChatMessage,
  MetaData,
  UserMessage,
} from '../../types/chat';
import Messages from './Messages';
import * as styles from './AIChat.styles';

const AIChat: React.FC = () => {
  const userInputRef = useRef<HTMLInputElement>(null);

  const [metaData, setMetaData] = useState<MetaData>(); // request 시 data로 보낼 데이터
  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const idRef = useRef(0);

  const {
    response,
    isLoading,
    error,
    sendRequest: getAnswer,
  } = useAxios(aiApi.getChat);

  // id 부여 및 chatData 추가
  // answer 가져오기
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredUserText = userInputRef.current?.value;
    if (enteredUserText) {
      userInputRef.current.value = '';
      idRef.current += 1;
      const newUserMessage: UserMessage = {
        id: idRef.current,
        sender: 'user',
        text: enteredUserText,
      };
      // add to new user message
      setChatData((prev) => [...prev, newUserMessage]);
      getAnswer({ text: enteredUserText, data: metaData });
    }
  };

  // answer 가져오면 chatData에 추가
  useEffect(() => {
    if (!error && !isLoading && response?.data) {
      idRef.current += 1;

      // add to new assistant message
      const products = response.data.data.products?.map((product) => ({
        name: product.name,
        price: product.price,
        rating: product.rating,
        ratingCount: product.rating_total_count,
        thumbnail: product.thumbnail,
        link: product.link,
      }));
      const newAssistantMessage: AssistantMessage = {
        id: idRef.current,
        sender: 'assistant',
        text: response.data.answer,
        products: products,
        questions: response.data.data.questions,
      };
      setChatData((prev) => [...prev, newAssistantMessage]);

      // fetch meta data
      const metaData: MetaData = {
        state: response.data.data.state,
        threadId: response.data.data.thread_id,
      };
      setMetaData(metaData);
    }
  }, [isLoading, error]);

  return (
    <ResponsiveContainer>
      <main css={styles.main}>
        <div css={styles.chatContainer}>
          <Messages data={chatData} isLoading={isLoading} />
          <ChatInput inputRef={userInputRef} submitHandler={submitHandler} />
        </div>
      </main>
    </ResponsiveContainer>
  );
};

export default AIChat;
