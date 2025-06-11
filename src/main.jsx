import React , { StrictMode } from 'react'
import ReactDOM , { createRoot} from 'react-dom/client'
import './index.css'
import Preloader from './hooks/Preloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader/>
  </StrictMode>,
)
