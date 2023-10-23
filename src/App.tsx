import Products from './components/Products/Products';
import SearchBar from './components/SearchBar/SearchBar';
import ProductContextProvider from './store/product-context';

function App() {
  return (
    <ProductContextProvider>
      <SearchBar />
      <Products />
    </ProductContextProvider>
  );
}

export default App;
