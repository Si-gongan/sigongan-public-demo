/** @jsxImportSource @emotion/react */
import ProductInfo from './ProductInfo';
import TabbedContent from './TabbedContent';
import * as styles from './ProductDetail.styles';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/axios/coupang/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductInfoSkeleton from '../UI/Loading/ProductInfoSkeleton';
import { DetailTabType, HistoryInput } from '../../types/product';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [tabType, setTabType] = useState<DetailTabType>('report');
  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProduct,
  } = useAxios(coupangApi.getProduct);

  useEffect(() => {
    fetchProduct(id as string);
  }, []);

  const histories = response?.data.product.histories.map(
    (history: HistoryInput) => ({
      price: history.price,
      regularPrice: history.regular_price,
      membershipPrice: history.membership_price,
      createdAt: history.created_at,
    })
  );

  const clickReportHandler = () => {
    setTabType('report');
  };

  const clickPriceHistoryHandler = () => {
    setTabType('priceHistory');
  };

  // TODO: 정리하기
  return (
    <div css={styles.container}>
      {isLoading && <ProductInfoSkeleton />}
      {error && <p>error...</p>}
      {!isLoading && response?.data.product && (
        <>
          <ProductInfo product={response?.data.product} />
          <TabbedContent
            id={id as string}
            histories={histories}
            tabType={tabType}
            clickReport={clickReportHandler}
            clickPriceHistory={clickPriceHistoryHandler}
          />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
