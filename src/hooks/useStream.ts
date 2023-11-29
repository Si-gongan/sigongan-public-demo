import { useEffect, useRef, useState } from 'react';
import { ApiSate } from '../types/api';
import * as Sentry from '@sentry/react';

type FetchFn<T> = (
  params: T,
  abortController: AbortController
) => Promise<ReadableStreamDefaultReader<Uint8Array> | undefined>;

export const useStream = <T>(
  params: T,
  fetchFn: FetchFn<T>,
  initialText: string = ''
) => {
  const [answer, setAnswer] = useState(initialText);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(true);
  const answerRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  let state: ApiSate = 'pending';
  if (isLoading) {
    state = 'loading';
  } else if (error) {
    state = 'error';
  }

  const streamReply = async () => {
    setAnswer(initialText);
    setIsLoading(true);
    setIsDone(false);
    try {
      const abortController = new AbortController(); // 요청마다 새로운 AbortController 생성
      abortControllerRef.current = abortController;
      const reader = await fetchFn(params, abortControllerRef.current);
      setIsLoading(false);
      while (reader) {
        const { done, value } = await reader.read();
        if (done) {
          setIsDone(true);
          answerRef.current?.focus();
          break;
        }
        const replyChunk = new TextDecoder().decode(value);
        setAnswer((prevReply) => prevReply + replyChunk); // update component state
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return; // 사용자가 '생성 멈추기' 버튼을 누른 경우 생성 오류 아님
      }
      setIsLoading(false);
      setError(error as Error);
      Sentry.captureException(error);
    }
  };

  useEffect(() => {
    answerRef.current?.focus();
  }, [state]);

  const startAnswer = async () => {
    streamReply();
  };

  const stopAnswer = () => {
    abortControllerRef.current?.abort();
    setIsLoading(false);
    setError(null);
    setIsDone(true);
  };

  return { answer, state, isDone, answerRef, startAnswer, stopAnswer };
};

export type StreamType = {
  answer: string;
  state: ApiSate;
  isDone: boolean;
  answerRef: React.RefObject<HTMLDivElement>;
  startAnswer: () => Promise<void>;
  stopAnswer: () => void;
};
