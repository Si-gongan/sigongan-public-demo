import { useMediaQuery } from 'react-responsive';
import { Category } from '../../../types/product';
import useMainProducts from '../../../hooks/useMainProducts';
import GridSlider from '../../UI/Slider/Grid';
import Slider from '../../UI/Slider/Slider';
import Item from './Item';

export interface MainProductsProps {
  type: 'best-products' | 'gold-box';
  category?: Category;
}

function MainProducts({ type, category }: MainProductsProps) {
  const isMobile = useMediaQuery({ maxWidth: 787 });
  const {
    products,
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

  if (isMobile) {
    return (
      <GridSlider
        currentPage={currentPage}
        totalPage={totalPage}
        nextPageFn={toNextPage}
        prevPageFn={toPrevPage}
      >
        {productChunks[currentPage].map((product) => (
          <Item
            key={`${product.rank}-${product.productId}`}
            product={product}
          />
        ))}
      </GridSlider>
    );
  }

  return (
    <Slider>
      {products.map((product) => (
        <Item key={`${product.rank}-${product.productId}`} product={product} />
      ))}
    </Slider>
  );
}

export default MainProducts;
