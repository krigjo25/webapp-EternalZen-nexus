import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//  Importing components
import Header from './page-header.jsx'
import Footer from './page-footer.jsx'
import MainSection from './page-main.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <Header />
    </header>
    <main>
      <MainSection />
    </main>
    <footer>
      <Footer />
    </footer>
  </StrictMode>,
)
