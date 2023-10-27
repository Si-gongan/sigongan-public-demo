/** @jsxImportSource @emotion/react */
import { useLoaderData } from 'react-router-dom';
import * as styles from './Report.styles';
import { ProductDetailModel } from '../../types/product';
import aiApi from '../../api/ai/api';
import ReportCard from '../UI/Card/ReportCard';
import useAxios from '../../hooks/useAxios';
import ReportContent from './ReportContent';
import { ApiSate } from '../../types/api';

const Report: React.FC = () => {
  const product = useLoaderData() as ProductDetailModel;
  const {
    response,
    isLoading,
    error,
    sendRequest: createReport,
  } = useAxios(aiApi.getReport, { id: product.id.toString() });

  let state: ApiSate = 'pending';
  if (isLoading) {
    state = 'loading';
  } else if (error) {
    state = 'error';
  } else if (response) {
    state = 'done';
  }

  const createReportHandler = async () => {
    createReport();
  };

  return (
    <div>
      <div css={styles.reportActions}>
        <button css={styles.reportButton} onClick={() => createReportHandler()}>
          AI 리포트 생성
        </button>
        <button css={styles.reportButton}>AI 상담</button>
      </div>
      <section css={styles.reportContainer}>
        <ReportCard>
          <ReportContent state={state} answer={response?.data.answer} />
        </ReportCard>
      </section>
    </div>
  );
};

export default Report;
