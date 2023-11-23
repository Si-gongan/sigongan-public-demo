import { useEffect, useRef, useState } from 'react';
import { ApiSate } from '../types/api';

type FetchFn<T> = (
  params: T
) => Promise<ReadableStreamDefaultReader<Uint8Array> | undefined>;

export const useStream = <T>(
  params: T,
  fetchFn: FetchFn<T>,
  initialText: string = ''
) => {
  const [answer, setAnswer] = useState(initialText);
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null); // 답변 생성 후 focus
  // TODO: loading, error에 대해서도 각각의 ref 만들어야 할지?

  let state: ApiSate = 'pending';
  if (isLoading) {
    state = 'loading';
  } else if (error) {
    state = 'error';
  }

  const streamReply = async () => {
    setAnswer(initialText);
    setIsLoading(true);
    try {
      const reader = await fetchFn(params);
      setIsLoading(false);
      while (reader) {
        const { done, value } = await reader.read();
        if (done) {
          answerRef.current?.focus();
          break;
        }
        const replyChunk = new TextDecoder().decode(value);
        setAnswer((prevReply) => prevReply + replyChunk); // update component state
      }
    } catch (error) {
      setIsLoading(false);
      setError(error as Error);
    }
  };

  useEffect(() => {
    answerRef.current?.focus();
  }, [state]);

  const getAnswer = async () => {
    streamReply();
  };

  return { answer, state, answerRef, getAnswer };
};
