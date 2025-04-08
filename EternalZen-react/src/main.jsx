//  Main.jsx

//  Import dependencies
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//  Import CSS
import './assets/css/index.css';

//  Importing components
import Main from './components/page-main.jsx';
import Header from './components/page-header.jsx';
import Footer from './components/page-footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <Main />
    </main>
    <footer className='flex-wrap-row-justify-center'>
      <Footer />
    </footer>
  </StrictMode>,
)
