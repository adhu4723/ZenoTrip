import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Authprovider } from './context/AuthContext.jsx'
import { TicketProvider } from './context/TicketContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Authprovider>
        <TicketProvider>
          <FilterProvider>
          <App />
          </FilterProvider>
        </TicketProvider>
      </Authprovider>
    </HashRouter>
  </StrictMode>,
)
