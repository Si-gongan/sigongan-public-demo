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
  data?: MainDetailResponseModel;
  isLoading: boolean;
  error: Error | null;
  tabProps: MainProductTab;
}

interface SearchProductProps {
  productType: 'search';
  data?: SearchDetailResponseModel;
  isLoading: boolean;
  error: Error | null;
  tabProps: ProductTab;
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

  return (
    <div css={styles.container}>
      {isLoading && <ProductInfoSkeleton />}
      {error && <RouterError />}
      {!isLoading && product && (
        <>
          <ProductInfo product={product} />
          {productType === 'main' ? (
            <TabbedContent
              productType={productType}
              tabType={tabType}
              changeTab={changeTab}
              tabProps={tabProps}
            />
          ) : (
            <TabbedContent
              productType={productType}
              tabType={tabType}
              changeTab={changeTab}
              tabProps={tabProps}
            />
          )}
        </>
      )}
    </div>
  );
}
