import React, { useState } from 'react'

import { FieldErrors } from 'utils/validations'
import { useUser } from 'unit/hooks/use-user'
import { signUp } from 'services/users'
import TextField from '../TextField'
import Button from '../Button'

import { signUpFormClasses } from './styles'

const SignUpForm = () => {
  const { login } = useUser()
  const [values, setValues] = useState({
    login: '',
    password: '',
    confirm_password: ''
  })
  const [loading, setLoading] = useState(false)
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) =>
    setValues((oldValues) => ({ ...oldValues, [field]: value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { login: username, password } = values
    await signUp(username, password)
    await login({ username, password })
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className={signUpFormClasses}>
      <TextField
        label="Usuário"
        name="login"
        placeholder="Insira seu nome de usuário"
        minLength={4}
        onInputChange={(v) => handleInput('login', v)}
        required
      />
      <TextField
        label="Senha"
        name="password"
        type="password"
        placeholder="Insira sua senha"
        minLength={4}
        onInputChange={(v) => handleInput('password', v)}
        required
      />
      <TextField
        label="Confirmar Senha"
        name="confirm_password"
        type="password"
        placeholder="Confirme sua senha"
        minLength={4}
        onInputChange={(v) => handleInput('confirm_password', v)}
        required
      />
      <Button disabled={loading}>
        {loading ? 'Carregando...' : 'Criar conta'}
      </Button>
    </form>
  )
}

export default SignUpForm
