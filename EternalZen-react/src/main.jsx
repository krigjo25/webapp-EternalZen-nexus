//  Main.jsx

//  Import dependencies
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

//  Import CSS
import './index.css';

//  Importing components
import Header from './components/page-header.jsx';
import Footer from './components/page-footer.jsx';
import Main from './components/page-main.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <Main />
    </main>
    <footer>
      <Footer />
    </footer>
  </StrictMode>,
)
