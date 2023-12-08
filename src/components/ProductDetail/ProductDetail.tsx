/** @jsxImportSource @emotion/react */
import { useQuery } from '@tanstack/react-query';
import ProductInfo from './ProductInfo';
import TabbedContent from './TabbedContent';
import * as styles from './ProductDetail.styles';
import { getProduct } from '../../api/axios/coupang/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductInfoSkeleton from '../UI/Loading/ProductInfoSkeleton';
import { DetailTabType, History, HistoryInput } from '../../types/product';
import RouterError from '../RouterError/RouterError';

const ProductDetailTest: React.FC = () => {
  const { id } = useParams();
  const [tabType, setTabType] = useState<DetailTabType>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', { id }],
    queryFn: () => getProduct({ id: id ?? '' }),
    enabled: id !== undefined,
    staleTime: 300000,
  });

  const product = data?.product;

  const histories: History[] = (data?.product.histories || []).map(
    (history: HistoryInput) => ({
      price: history.price,
      regularPrice: history.regular_price,
      membershipPrice: history.membership_price,
      createdAt: history.created_at,
    })
  );

  const changeTab = (tab: DetailTabType) => {
    setTabType(tab);
  };

  // TODO: 정리하기
  return (
    <div css={styles.container}>
      {isLoading && <ProductInfoSkeleton />}
      {/* TODO: 에러처리 */}
      {error && <RouterError />}
      {!isLoading && product && (
        <>
          <ProductInfo product={product} />
          <TabbedContent
            id={id as string}
            group={product.group}
            histories={histories}
            tabType={tabType}
            changeTab={changeTab}
          />
        </>
      )}
    </div>
  );
};

export default ProductDetailTest;
