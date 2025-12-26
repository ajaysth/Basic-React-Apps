import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BioProvider } from './context/bio/BioProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BioProvider>
      <App />
    </BioProvider>
  </StrictMode>,
)
