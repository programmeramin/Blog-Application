import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { ThemeProvider } from './providers/theme-provider';
import { Toaster } from './components/ui/sonner';
import { Provider } from 'react-redux';
import store from './store/store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
