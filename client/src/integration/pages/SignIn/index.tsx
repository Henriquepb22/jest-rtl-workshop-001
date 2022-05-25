import { useNavigate } from 'react-router-dom'

import SignInForm from 'unit/components/SignInForm'
import Button from 'unit/components/Button'

import { signInClasses } from './styles'

function SignIn() {
  const navigate = useNavigate()

  return (
    <div className={signInClasses}>
      <SignInForm />
      <Button
        color="secondary"
        type="button"
        onClick={() => navigate('/signup')}
      >
        Criar Conta
      </Button>
    </div>
  )
}

export default SignIn
