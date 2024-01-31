import { Category } from '../../../types/product';
import useMainProducts from '../../../hooks/useMainProducts';
import GridSlider from '../../UI/Slider/Grid';
import Item from './Item';

export interface MainProductsProps {
  type: 'best-products' | 'gold-box';
  category?: Category;
}

function MainProducts({ type, category }: MainProductsProps) {
  // TODO: toPrevPage/toNextPage 버튼 누른 후, 상품으로 focus
  const {
    productChunks,
    error,
    currentPage,
    totalPage,
    toPrevPage,
    toNextPage,
  } = useMainProducts(type, category);

  if (error) {
    throw new Error(`${type} fetching Error`);
  }

  return (
    <GridSlider
      currentPage={currentPage}
      totalPage={totalPage}
      nextPageFn={toNextPage}
      prevPageFn={toPrevPage}
      title={category?.title || '특가'}
    >
      {productChunks[currentPage].map((product) => (
        <Item key={`${product.rank}-${product.productId}`} product={product} />
      ))}
    </GridSlider>
  );
}

export default MainProducts;
