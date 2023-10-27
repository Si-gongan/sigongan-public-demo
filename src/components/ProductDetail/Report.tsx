/** @jsxImportSource @emotion/react */
import * as styles from './Report.styles';
import aiApi from '../../api/ai/api';
import ReportCard from '../UI/Card/ReportCard';
import useAxios from '../../hooks/useAxios';
import ReportContent from './ReportContent';
import { ApiSate } from '../../types/api';

interface Props {
  id: string;
}

const Report: React.FC<Props> = (props) => {
  const { id } = props;
  const {
    response,
    isLoading,
    error,
    sendRequest: createReport,
  } = useAxios(aiApi.getReport, { id });

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
