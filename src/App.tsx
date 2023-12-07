import Router from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ProductContextProvider from './store/product-context';
import ThemeContextProvider from './store/theme-context';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ProductContextProvider>
          <Router />
        </ProductContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
