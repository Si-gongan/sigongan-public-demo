/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import appUrlState from '../../recoil/app-url';
import Info from '../UI/Info/Info';
import {
  MainProductDetailModel,
  ProductDetailModel,
} from '../../types/product';
import { getInfo } from '../../utils';
import * as styles from './ProductInfo.styles';

interface Props {
  product: ProductDetailModel | MainProductDetailModel;
}

const ProductInfo: React.FC<Props> = (props) => {
  const appUrl = useRecoilValue(appUrlState);

  const product = props.product;
  const thumbnail = 'group' in product ? product.picture : product.thumbnail;
  const url =
    'group' in product
      ? `https://coupang.com/vp/products/${product.group}`
      : product.productUrl;
  const price = `${product.price.toLocaleString()}원`;
  const infoData = getInfo(product);

  return (
    <div css={styles.container}>
      <div css={styles.imgWrapper} aria-label="상품 이미지">
        <img css={styles.img} src={thumbnail} alt={product.name} />
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
          <div css={styles.links}>
            <Link css={styles.button('cancel')} to="/products">
              이전으로
            </Link>
            <a
              css={styles.button('cancel')}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              제품 보러가기
            </a>
          </div>
          <div css={styles.links}>
            <a
              css={styles.button('ok')}
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              매니저에게 상품 설명 받기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
