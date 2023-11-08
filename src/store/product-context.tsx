import React, { useState } from 'react';
import { ProductModel } from '../types/product';

interface ContextModel {
  products: ProductModel[];
  query: string;
  page: number;
  resetPage: () => void;
  addPage: () => void;
  setUserQuery: (query: string) => void;
  setNewProducts: (products: ProductModel[]) => void;
  resetProducts: () => void;
}

interface Children {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<ContextModel>({
  products: [],
  query: '',
  page: 1,
  resetPage: () => {
    // placeholder function
  },
  addPage: () => {
    // placeholder function
  },
  setUserQuery: () => {
    // placeholder function
  },
  setNewProducts: () => {
    // placeholder function
  },
  resetProducts: () => {
    // placeholder function
  },
});

const ProductContextProvider: React.FC<Children> = (props) => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const resetPage = () => {
    setPage(1);
  };

  const addPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const setUserQuery = (query: string) => {
    setQuery(query);
  };

  const setNewProducts = (newProducts: ProductModel[]) => {
    setProducts((prev) => [...prev, ...newProducts]);
  };

  const resetProducts = () => {
    setProducts([]);
  };

  const contextValue: ContextModel = React.useMemo(
    () => ({
      products,
      query,
      page,
      resetPage,
      addPage,
      setUserQuery,
      setNewProducts,
      resetProducts,
    }),
    [products, query, page]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
