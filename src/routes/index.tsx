import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const SignIn = lazy(() => import('integration/pages/SignIn'))
const SignUp = lazy(() => import('integration/pages/SignUp'))

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
)

export default App
