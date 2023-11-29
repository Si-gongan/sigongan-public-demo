import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/fonts/font.css';
import './index.css';
import App from './App';
import { setThemeColor } from './utils';
import * as Sentry from '@sentry/react';

Sentry.init({
  // .env SENTRY_DSN
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: [
        'localhost',
        'https://sigongan-public-demo.vercel.app/',
      ],
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
setThemeColor(); // TODO: 현재는 새로고침 할 때만 메타 태그 변경
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
