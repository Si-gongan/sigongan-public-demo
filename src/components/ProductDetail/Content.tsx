/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { MainDetailResponseModel } from '../../api/axios/ai/types';
import { SearchDetailResponseModel } from '../../api/axios/coupang/types';
import { DetailTabType, MainProductTab, ProductTab } from '../../types/product';
import RouterError from '../RouterError/RouterError';
import ProductInfoSkeleton from '../UI/Loading/ProductInfoSkeleton';
import ProductInfo from './ProductInfo';
import TabbedContent from './TabbedContent';
import * as styles from './Content.styles';

interface MainProductProps {
  productType: 'main';
  tabProps: MainProductTab;
  data?: MainDetailResponseModel;
  isLoading: boolean;
  error: Error | null;
}

interface SearchProductProps {
  productType: 'search';
  tabProps: ProductTab;
  data?: SearchDetailResponseModel;
  isLoading: boolean;
  error: Error | null;
}

type Props = MainProductProps | SearchProductProps;

export default function ProductDetailContent({
  productType,
  data,
  isLoading,
  error,
  tabProps,
}: Props) {
  const [tabType, setTabType] = useState<DetailTabType>();
  const product = data?.product;

  const changeTab = (tab: DetailTabType) => {
    setTabType(tab);
  };

  const tabbedProps =
    productType === 'main'
      ? { productType, tabProps }
      : { productType, tabProps };

  return (
    <div css={styles.container}>
      {isLoading && <ProductInfoSkeleton />}
      {error && <RouterError />}
      {!isLoading && product && (
        <>
          <ProductInfo product={product} />
          <TabbedContent
            tabType={tabType}
            changeTab={changeTab}
            {...tabbedProps}
          />
        </>
      )}
    </div>
  );
}
