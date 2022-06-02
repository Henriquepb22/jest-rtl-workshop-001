import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { UserProvider } from 'unit/hooks/use-user'
import AppRoutes from 'routes'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div className="flex justify-center items-center min-h-screen">
      <Suspense fallback="Carregando...">
        <BrowserRouter>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  </React.StrictMode>
)
