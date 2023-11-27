/** @jsxImportSource @emotion/react */
import * as styles from './Content.styles';
import { Link } from 'react-router-dom';

interface Props {
  clickBack: () => void;
}

const ContentManual: React.FC<Props> = (props) => {
  return (
    <div css={styles.container}>
      <div css={styles.backBtn} onClick={props.clickBack}>
        이전으로
      </div>
      <div css={styles.textContainer}>
        <div css={styles.text}>
          <p>
            픽포미는 온라인 쇼핑을 AI에게 도움받을 수 있는 서비스입니다. 기존
            픽포미 애플리케이션에 다양한 기능이 추가되었어요.
          </p>
          <h3>1. 검색 기능</h3>
          <p>
            이제 원하는 상품을 직접 검색할 수 있어요. 위 검색창에 찾고 싶은
            상품을 검색해 보세요. 자세한 상품의 설명과 함께 상품의 외관, 해당
            상품을 추천하는 이유까지 제공한답니다.
          </p>
          <h3>2. AI 채팅</h3>
          <p>
            새로운 물건을 구매하고자 하지만 무슨 상품을 구매할지 몰라 어려움을
            겪은 경험이 있다면, AI 채팅을 사용해 보세요. 특정 가격이나 색상에
            맞는 상품을 꼼꼼하게 분석하여 상품을 추천해줘요.
          </p>
        </div>
        <Link to="/chat">
          <div css={styles.emBtn} onClick={props.clickBack}>
            ▶️ AI 채팅 사용해보기
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ContentManual;
