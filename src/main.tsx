import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RelativeTimeProvider } from './relative-time-context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RelativeTimeProvider>
      <App />
    </RelativeTimeProvider>
  </StrictMode>,
)
