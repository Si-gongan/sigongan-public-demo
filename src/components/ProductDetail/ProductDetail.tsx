/** @jsxImportSource @emotion/react */
import ProductInfo from './ProductInfo';
import Report from './Report';
import * as styles from './ProductDetail.styles';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/coupang/api';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ProductInfoSkeleton from '../UI/Loading/ProductInfoSkeleton';

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProduct,
  } = useAxios(coupangApi.getProduct, id as string);

  useEffect(() => {
    fetchProduct();
  }, []);

  // TODO: 정리하기
  return (
    <div css={styles.container}>
      {isLoading && <ProductInfoSkeleton />}
      {error && <p>error...</p>}
      {!isLoading && response?.data.product && (
        <>
          <ProductInfo product={response?.data.product} />
          <Report id={id as string} />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
