import { useEffect, useRef, useState } from 'react';
import { AIMessage, ChatMessage, MetaData, UserMessage } from '../types/chat';
import useAxios from './useAxios';
import aiApi from '../api/axios/ai/api';

const useChat = () => {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [metaData, setMetaData] = useState<MetaData>();
  const [chatData, setChatData] = useState<ChatMessage[]>([]);
  const idRef = useRef(0);

  const {
    response,
    isLoading,
    error,
    sendRequest: getAnswer,
  } = useAxios(aiApi.getChat);

  const clickQuestion = (recommendedQuestion: string) => {
    idRef.current += 1;
    const newUserMessage: UserMessage = {
      id: idRef.current,
      sender: 'user',
      text: recommendedQuestion,
    };
    setChatData((prev) => [...prev, newUserMessage]);
    getAnswer({ text: recommendedQuestion, data: metaData });
  };

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
      setChatData((prev) => [...prev, newUserMessage]);
      getAnswer({ text: enteredUserText, data: metaData });
    }
  };

  useEffect(() => {
    if (!error && !isLoading && response?.data) {
      idRef.current += 1;

      const products = response.data.data.products?.map((product) => ({
        name: product.name,
        price: product.price,
        rating: product.rating,
        ratingCount: product.rating_total_count,
        thumbnail: product.thumbnail,
        link: product.link,
      }));
      const newAIMessage: AIMessage = {
        id: idRef.current,
        sender: 'ai',
        text: response.data.answer,
        products: products,
        questions: response.data.data.questions,
      };
      setChatData((prev) => [...prev, newAIMessage]);

      const metaData: MetaData = {
        state: response.data.data.state,
        threadId: response.data.data.thread_id,
      };
      setMetaData(metaData);
    }
  }, [isLoading, error]);

  return {
    chatData,
    isLoading,
    error,
    userInputRef,
    submitHandler,
    clickQuestion,
  };
};

export default useChat;
