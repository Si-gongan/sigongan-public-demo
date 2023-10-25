import Router from './routes';
import ProductContextProvider from './store/product-context';

function App() {
  return (
    <ProductContextProvider>
      <Router />
    </ProductContextProvider>
  );
}

export default App;
