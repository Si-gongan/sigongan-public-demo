import { useContext, useEffect, useState } from 'react';
import Products from '../components/Products/Products';
import SearchBar from '../components/SearchBar/SearchBar';
import ResponsiveContainer from '../components/UI/Layout/ResponsiveContainer';
import { ProductContext } from '../store/product-context';
import useAxios from '../hooks/useAxios';
import coupangApi from '../api/axios/coupang/api';
import { ProductsResponseModel } from '../api/axios/coupang/types';

const ProductsPage: React.FC = () => {
  const { setNewProducts } = useContext(ProductContext);
  const [userInput, setUserInput] = useState('');

  const {
    response,
    isLoading,
    error,
    sendRequest: fetchProducts,
  } = useAxios(coupangApi.getProducts, userInput);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await fetchProducts();
  };

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
    <ResponsiveContainer>
      <SearchBar
        isLoading={isLoading}
        error={error}
        submitHandler={submitHandler}
        setUserInput={setUserInput}
      />
      <Products isLoading={isLoading} error={error} />
    </ResponsiveContainer>
  );
};

export default ProductsPage;
