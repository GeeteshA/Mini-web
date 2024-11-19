import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Stopwatch from './Stopwatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Stopwatch /> */}
  </StrictMode>,
)
