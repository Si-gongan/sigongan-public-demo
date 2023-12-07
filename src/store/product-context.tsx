import React, { useState } from 'react';

interface ContextModel {
  query: string;
  setUserQuery: (query: string) => void;
}

interface Children {
  children: React.ReactNode;
}

export const ProductContext = React.createContext<ContextModel>({
  query: '',
  setUserQuery: () => {
    // placeholder function
  },
});

const ProductContextProvider: React.FC<Children> = (props) => {
  const [query, setQuery] = useState<string>('');

  const setUserQuery = (query: string) => {
    setQuery(query);
  };

  const contextValue: ContextModel = {
    query,
    setUserQuery,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
