import { useRef } from 'react';
import { Category } from '../../../types/product';
import useMainProducts from '../../../hooks/useMainProducts';
import GridSlider from '../../UI/Slider/Grid';
import Item from './Item';

export interface MainProductsProps {
  type: 'best-products' | 'gold-box';
  category?: Category;
}

function MainProducts({ type, category }: MainProductsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    productChunks,
    error,
    currentPage,
    totalPage,
    toPrevPage,
    toNextPage,
  } = useMainProducts(type, category, containerRef);

  if (error) {
    throw new Error(`${type} fetching Error`);
  }

  return (
    <GridSlider
      currentPage={currentPage}
      totalPage={totalPage}
      nextPageFn={toNextPage}
      prevPageFn={toPrevPage}
      ariaTitle={category?.title || '특가'}
      containerRef={containerRef}
    >
      {productChunks[currentPage].map((product) => (
        <Item key={`${product.rank}-${product.productId}`} product={product} />
      ))}
    </GridSlider>
  );
}

export default MainProducts;
