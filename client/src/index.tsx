import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/styles/index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from 'features/store';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from 'pages/MainPage/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
