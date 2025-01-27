import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './Principal.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
