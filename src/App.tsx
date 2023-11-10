import Router from './routes';
import ProductContextProvider from './store/product-context';
import ThemeContextProvider from './store/theme-context';

function App() {
  return (
    <ThemeContextProvider>
      <ProductContextProvider>
        <Router />
      </ProductContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
