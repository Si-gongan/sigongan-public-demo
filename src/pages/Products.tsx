import { useContext, useEffect, useState } from 'react';
import Products from '../components/Products/Products';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import { ProductContext } from '../store/product-context';
import useAxios from '../hooks/useAxios';
import coupangApi from '../api/axios/coupang/api';
import { ProductsResponseModel } from '../api/axios/coupang/types';

const ProductsPage: React.FC = () => {
  const { query, setNewProducts, resetProducts } = useContext(ProductContext);
  const [page, setPage] = useState(1);

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts, { query, page });

  const toNextPage = () => {
    setPage((page) => {
      if (page >= 667) {
        return page;
      }
      return page + 1;
    });
  };

  useEffect(() => {
    if (query.trim().length > 0) {
      resetProducts();
      setPage(1);
    }
  }, [query]);

  useEffect(() => {
    if (query.trim().length > 0) {
      fetchProducts();
    }
  }, [page]);

  useEffect(() => {
    if (!isLoading && !error && response?.data.products) {
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
  }, [response?.data.products]);

  return (
    <>
      <ResponsiveContainer>
        <Products isLoading={isLoading} error={error} toNextPage={toNextPage} />
      </ResponsiveContainer>
    </>
  );
};

export default ProductsPage;
