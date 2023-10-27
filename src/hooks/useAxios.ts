import { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

type RequestFn<T> = (params: T) => Promise<AxiosResponse>;

const useAxios = <T>(requestFn: RequestFn<T>, params: T) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setResponse(undefined);
    setIsLoading(true);
    try {
      console.log('fetching data...');
      const response = await requestFn(params);
      setResponse(response);
      console.log('success!');
    } catch (error) {
      setError(error as AxiosError);
    }
    setIsLoading(false);
  };

  // trigger
  const sendRequest = () => {
    fetchData();
  };

  return { response, error, isLoading, sendRequest };
};

export default useAxios;