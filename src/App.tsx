import Router from './routes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import ThemeStateProvider from './providers/ThemeStateProvider';

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeStateProvider>
          <Router />
        </ThemeStateProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
