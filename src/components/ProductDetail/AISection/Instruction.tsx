/** @jsxImportSource @emotion/react */
import { FaCircleInfo } from 'react-icons/fa6';
import * as styles from './AISection.styles';
import ContentCard from '../../UI/Card/ContentCard';

const Instruction: React.FC = () => {
  return (
    <ContentCard>
      <div css={styles.content}>
        <div css={styles.descriptionContainer}>
          <FaCircleInfo size={20} color="#bbb" />
          <p css={styles.description}>
            <strong>AI 리포트 생성</strong> 또는 <strong>이미지 분석</strong>{' '}
            탭을 눌러보세요
          </p>
        </div>
      </div>
    </ContentCard>
  );
};

export default Instruction;
