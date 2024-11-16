import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'
import GlobalContextProvider from './components/contexts/GlobalContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
)
