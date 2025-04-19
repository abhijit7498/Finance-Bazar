import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoanProvider } from '@/context/LoanApplyinng.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoanProvider>
        <App />
      </LoanProvider>
    </BrowserRouter>
  </StrictMode>,
)
