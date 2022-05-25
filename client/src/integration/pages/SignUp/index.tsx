import { useNavigate } from 'react-router-dom'

import SignUpForm from 'unit/components/SignUpForm'
import Button from 'unit/components/Button'

import { signUpClasses } from './styles'

function SignUp() {
  const navigate = useNavigate()

  return (
    <div className={signUpClasses}>
      <SignUpForm />
      <Button onClick={() => navigate('/')} color="secondary">
        Voltar
      </Button>
    </div>
  )
}

export default SignUp
