import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BioProvider } from './context/bio/BioProvider.tsx'
import { ThemeProvider } from './context/theme/ThemeProvider.tsx'
import { CartProvider } from './context/cart/CartProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BioProvider>
      <ThemeProvider >
        <CartProvider >
          <App />
        </CartProvider>
      </ThemeProvider >
    </BioProvider>
  </StrictMode>,
)
