import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider } from 'unit/hooks/use-user'

const SignIn = lazy(() => import('integration/pages/SignIn'))
const SignUp = lazy(() => import('integration/pages/SignUp'))

const App = () => (
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>
)

export default App
