import { useState } from 'react';
import { ReportParamsModel } from '../api/axios/ai/types';
import { getReport } from '../api/fetch/ai/api';

export const useStream = (
  params: ReportParamsModel,
  updateReplyFn: React.Dispatch<React.SetStateAction<string>>
) => {
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  const streamReply = async () => {
    setIsLoading(true);
    try {
      const reader = await getReport(params);
      setIsLoading(false);
      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const replyChunk = new TextDecoder().decode(value);
        updateReplyFn((prevReply) => prevReply + replyChunk); // update component state
      }
    } catch (error) {
      setIsLoading(false);
      setError(error as Error);
    }
  };

  const getAnswer = async () => {
    streamReply();
  };

  return { error, isLoading, getAnswer };
};
