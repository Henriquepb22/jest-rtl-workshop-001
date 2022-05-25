import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useUser } from 'unit/hooks/use-user'

const SignIn = lazy(() => import('integration/pages/SignIn'))
const SignUp = lazy(() => import('integration/pages/SignUp'))
const Profile = lazy(() => import('integration/pages/Profile'))

const AppRoutes = () => {
  const { authenticated } = useUser()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? <Navigate to="/profile" replace /> : <SignIn />
          }
        />
        <Route
          path="/signup"
          element={
            authenticated ? <Navigate to="/profile" replace /> : <SignUp />
          }
        />
        <Route
          path="/profile"
          element={authenticated ? <Profile /> : <Navigate to="/" replace />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
