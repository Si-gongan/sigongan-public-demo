import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

type RequestFn<T> = (params: T) => Promise<AxiosResponse>;

const useAxios = <T>(requestFn: RequestFn<T>) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (params: T) => {
    setResponse(undefined);
    setIsLoading(true);
    try {
      const response = await requestFn(params);
      setResponse(response);
    } catch (error) {
      setError(error as AxiosError);
      console.log(error);
    }
    setIsLoading(false);
  };

  // trigger
  const sendRequest = (params: T) => {
    fetchData(params);
  };

  return { response, error, isLoading, sendRequest };
};

export default useAxios;
