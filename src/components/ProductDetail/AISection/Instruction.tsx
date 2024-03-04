/** @jsxImportSource @emotion/react */
import { FaCircleInfo } from 'react-icons/fa6';
import * as styles from './AISection.styles';
import ContentCard from '../../UI/Card/ContentCard';

interface Props {
  productType: 'main' | 'search';
}

export default function Instruction({ productType }: Props) {
  const text =
    productType === 'main' ? (
      <p css={styles.description}>
        <strong>이미지 설명</strong> 또는 <strong>리뷰 분석</strong> 탭을
        눌러보세요
      </p>
    ) : (
      <p css={styles.description}>
        위 탭을 눌러 <strong>AI 분석 서비스</strong>를 이용해 보세요
      </p>
    );
  return (
    <ContentCard>
      <div css={styles.content}>
        <div css={styles.descriptionContainer}>
          <FaCircleInfo size={20} color="#bbb" />
          {text}
        </div>
      </div>
    </ContentCard>
  );
}
