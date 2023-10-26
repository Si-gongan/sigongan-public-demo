/** @jsxImportSource @emotion/react */
import { useLoaderData } from 'react-router-dom';
import * as styles from './Report.styles';
import { ProductDetailModel } from '../../types/product';
import { ReportParamsModel } from '../../api/ai/types';
import aiApi from '../../api/ai/api';
import { useState } from 'react';
import ReportCard from '../UI/Card/ReportCard';

const Report: React.FC = () => {
  const product = useLoaderData() as ProductDetailModel;
  const [reportResult, setReportResult] = useState('');

  const createReport = async () => {
    const reportParams: ReportParamsModel = {
      id: product.id.toString(),
    };
    try {
      const { data } = await aiApi.getReport(reportParams);
      setReportResult(data.answer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div css={styles.reportActions}>
        <button css={styles.reportButton} onClick={createReport}>
          AI 리포트 생성
        </button>
        <button css={styles.reportButton}>AI 상담</button>
      </div>
      <section css={styles.reportContainer}>
        <ReportCard>
          <div css={styles.reportContent}>{reportResult}</div>
        </ReportCard>
      </section>
    </div>
  );
};

export default Report;
