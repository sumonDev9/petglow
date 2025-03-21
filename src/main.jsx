import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import DisableZoom from './components/DisableZoom.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DisableZoom></DisableZoom>
  <RouterProvider router={router} />
</React.StrictMode>
)
