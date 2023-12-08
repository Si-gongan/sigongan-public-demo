import { useEffect, useRef, useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import * as Sentry from '@sentry/react';

type RequestFn<T, R> = (params: T) => Promise<AxiosResponse<R>>;

const useAxios = <T, R>(requestFn: RequestFn<T, R>) => {
  const [response, setResponse] = useState<AxiosResponse<R>>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const fetchData = async (params: T) => {
    setResponse(undefined);
    setIsLoading(true);
    try {
      const response = await requestFn(params);
      setResponse(response);
    } catch (error) {
      setError(error as AxiosError);
      Sentry.captureException(error);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    answerRef.current?.focus();
  }, [isLoading, error]);

  // trigger
  const sendRequest = (params: T) => {
    fetchData(params);
  };

  return { response, error, isLoading, answerRef, sendRequest };
};

export default useAxios;
