import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChatRoutes from './config/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatRoutes/>
  </StrictMode>,
)
