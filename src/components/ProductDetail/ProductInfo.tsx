/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import Info from '../UI/Info/Info';
import { InfoProps } from '../UI/Info/types';
import * as styles from './ProductInfo.styles';
import { ProductDetailModel } from '../../types/product';

interface Props {
  product: ProductDetailModel;
}

const ProductInfo: React.FC<Props> = (props) => {
  const product = props.product;
  const price = `${product.price.toLocaleString()}원`;

  const infoData: InfoProps['infoData'] = [
    {
      title: 'category',
      description: product.category,
    },
    {
      title: 'ratings',
      description: product.ratings.toString(),
    },
    {
      title: 'reviews',
      description: product.reviews.toString(),
    },
  ];
  return (
    <div css={styles.container}>
      <div css={styles.imgWrapper}>
        <img css={styles.img} src={product.picture} />
      </div>
      <div css={styles.contentContainer}>
        <div css={styles.mainInfoContainer}>
          <h2 css={styles.detailTitle}>{product.name}</h2>
          <div css={styles.detailPrice}>{price}</div>
        </div>
        <div css={styles.metaContainer}>
          <strong css={styles.subTitle}>기타 정보</strong>
          <Info infoData={infoData} />
        </div>
        <div css={styles.actions}>
          <Link css={styles.button('cancel')} to={'..'}>
            이전으로
          </Link>
          <a
            css={styles.button('ok')}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            제품 보러가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
