//  Main.jsx

//  Import dependencies
import { StrictMode } from 'react';
import { router } from './router.jsx';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

//  Import CSS
import './assets/css/index.css';

//  Importing components
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
