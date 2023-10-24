import ProductsPage from './pages/Products';
import ProductContextProvider from './store/product-context';

function App() {
  return (
    <ProductContextProvider>
      <ProductsPage />
    </ProductContextProvider>
  );
}

export default App;
