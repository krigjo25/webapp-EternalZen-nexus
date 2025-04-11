//  EternalZen App

//  Importing necessary dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

//  Importing Components
import Header from './components/page-header.jsx';
import Footer from './components/page-footer.jsx';

//  Importing Cascade Style Sheets
import './assets/css/index.css';

function App() {
  return (
    <>
      <header className='flex-wrap-row-justify-center'>
        <Header />
      </header>
      <main className='flex-wrap-row-justify-center'>
        { /*  The Outlet component is a placeholder that will be replaced by the child route's component */ }
        <Outlet />
      </main>
      <footer className='flex-wrap-row-justify-center'>
        <Footer />
      </footer>
    </>
  )
}

export default App
