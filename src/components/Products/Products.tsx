/** @jsxImportSource @emotion/react */
import { useContext, useEffect } from 'react';
import { ProductContext } from '../../store/product-context';
import Product from './Product';
import { productsContainer, ulStyle } from './Products.styles';
// import ProductsSkeleton from '../UI/Loading/ProductsSkeleton';
import useAxios from '../../hooks/useAxios';
import coupangApi from '../../api/axios/coupang/api';
import { ProductsResponseModel } from '../../api/axios/coupang/types';
import LoadMoreButton from './LoadMoreButton';
import ScrollToTopButton from './ScrollToTopButton';
// import { ProductModel } from '../../types/product';

const Products: React.FC = () => {
  const { products, query, page, addPage, setNewProducts } =
    useContext(ProductContext);
  // const [lastPage, setLastPage] = useState<number>();
  // const [productCount, setProductCount] = useState<number>();

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts);

  const toNextPage = () => {
    addPage();
    fetchProducts({ query, page: page + 1 });
  };

  useEffect(() => {
    if (query.trim().length > 0 && products.length === 0) {
      fetchProducts({ query, page });
    }
  }, [query, products.length]);

  useEffect(() => {
    if (!isLoading && !error && response?.data.products) {
      // setLastPage(response.data.last_page);
      // setProductCount(response.data.count);
      const newProducts = response?.data.products.map(
        (product: ProductsResponseModel) => ({
          id: product.id,
          title: product.name,
          image: product.thumbnail,
          price: product.price,
          url: product.url,
        })
      );
      setNewProducts(newProducts);
    }
  }, [isLoading]);

  return (
    <>
      <div css={productsContainer}>
        <ul css={ulStyle}>
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          {/* TODO: UI 개선 */}
          {/* {isLoading && <ProductsSkeleton />} */}
        </ul>
        {query.trim().length > 0 && (
          <LoadMoreButton
            // toNextPage={loadMoreHandler}
            toNextPage={toNextPage}
            isLoading={isLoading}
          />
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Products;
