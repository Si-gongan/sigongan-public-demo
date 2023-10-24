/** @jsxImportSource @emotion/react */
import Info from '../UI/Info/Info';
import { InfoProps } from '../UI/Info/types';
import * as styles from './ProductDetail.styles';

const ProductDetail: React.FC = () => {
  const infoData: InfoProps['infoData'] = [
    {
      title: '정보 1',
      description:
        '정보 1에 대한 설명글 정보 1에 대한 설명글 정보 1에 대한 설명글 정보 1에 대한 설명글 정보 1에 대한 설명글',
    },
    {
      title: '정보 2',
      description:
        '정보 2에 대한 설명글 정보 2에 대한 설명글 정보 2에 대한 설명글',
    },
  ];
  return (
    <div css={styles.container}>
      <div css={styles.imgWrapper}>
        <img />
      </div>
      <div css={styles.contentContainer}>
        <div css={styles.mainInfoContainer}>
          <h2 css={styles.detailTitle}>
            Product Name Product Name Product Name Product Name
          </h2>
          <div css={styles.detailPrice}>100,000원</div>
        </div>
        <div css={styles.metaContainer}>
          <strong css={styles.subTitle}>기타 정보</strong>
          <Info infoData={infoData} />
        </div>
        <div css={styles.actions}>
          <button css={styles.button('cancel')}>이전으로</button>
          <button css={styles.button('ok')}>제품 보러가기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
