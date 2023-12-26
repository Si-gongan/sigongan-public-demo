import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import chatState from '../recoil/chat';
import { AIMessage, MetaData, UserMessage } from '../types/chat';
import { getChat } from '../api/axios/ai/api';
import { ChatResponseModel } from '../api/axios/ai/types';
import { AxiosError } from 'axios';

const useChat = () => {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [metaData, setMetaData] = useState<MetaData>();
  const [chatData, setChatData] = useRecoilState(chatState);

  const idRef = useRef(0);

  const {
    mutate,
    isPending: isLoading,
    error,
  } = useMutation<ChatResponseModel, AxiosError, string>({
    mutationFn: (text) => getChat({ text, data: metaData }),
    onSuccess: (data) => {
      idRef.current += 1;

      const products = data.data.products?.map((product) => ({
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
        text: data.answer,
        products: products,
        questions: data.data.questions,
      };

      const newMetaData: MetaData = {
        state: data.data.state,
        threadId: data.data.thread_id,
      };

      setChatData((prev) => [...prev, newAIMessage]);
      setMetaData(newMetaData);
    },
  });

  const clickQuestion = (recommendedQuestion: string) => {
    idRef.current += 1;
    const newUserMessage: UserMessage = {
      id: idRef.current,
      sender: 'user',
      text: recommendedQuestion,
    };

    setChatData((prev) => [...prev, newUserMessage]);
    mutate(recommendedQuestion); // recommendedQuestion인지 확인
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
      mutate(userInputRef.current?.value);
    }
  };

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
