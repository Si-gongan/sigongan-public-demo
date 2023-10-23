import React, { useState } from 'react';
import { ProductModel } from '../types/product';

interface ContextModel {
  products: ProductModel[];
  query: string;
  setUserQuery: (query: string) => void;
  addProduct: (product: ProductModel) => void;
  setNewProducts: (products: ProductModel[]) => void;
}

interface Children {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<ContextModel>({
  products: [],
  query: '',
  setUserQuery: () => {
    // placeholder function
  },
  addProduct: () => {
    // placeholder function
  },
  setNewProducts: () => {
    // placeholder function
  },
});

const ProductContextProvider: React.FC<Children> = (props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [query, setQuery] = useState<string>('');

  const setUserQuery = (query: string) => {
    setQuery(query);
  };

  const addProduct = (product: ProductModel) => {
    setProducts((prevProducts) => prevProducts.concat(product));
  };

  const setNewProducts = (products: ProductModel[]) => {
    setProducts(products);
  };

  const contextValue: ContextModel = {
    products,
    query,
    setUserQuery,
    addProduct,
    setNewProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
