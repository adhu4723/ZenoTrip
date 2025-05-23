import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Authprovider } from './context/AuthContext.jsx'
import { PurchaseProvider } from './context/PurchaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Authprovider>
        <PurchaseProvider>
          <App />
        </PurchaseProvider>
      </Authprovider>
    </HashRouter>
  </StrictMode>,
)
