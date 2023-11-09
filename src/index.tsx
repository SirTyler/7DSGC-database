import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { router } from './App';
import { ThemeProvider } from './theme/theme-context';

import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { RouterProvider } from 'react-router';
import { db_build } from './database/_database';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

db_build();
reportWebVitals();