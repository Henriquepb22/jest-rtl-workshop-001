import React from 'react'
import ReactDOM from 'react-dom/client'

import { UserProvider } from 'unit/hooks/use-user'
import AppRoutes from 'routes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </React.StrictMode>
)
