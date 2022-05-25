import React, { useState } from 'react'

import { FieldErrors, signUpValidate } from 'utils/validations'
import { useUser } from 'unit/hooks/use-user'
import { signUp } from 'services/users'
import TextField from '../TextField'
import Button from '../Button'

import { signUpFormClasses } from './styles'

export type SignUpFormValues = {
  username: string
  password: string
  confirm_password: string
}

const SignUpForm = () => {
  const { login } = useUser()
  const [values, setValues] = useState<SignUpFormValues>({
    username: '',
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

    const errors = signUpValidate(values)
    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }
    setFieldError({})

    const { username, password } = values
    await signUp(username, password)
    await login({ username, password })
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className={signUpFormClasses}>
      <TextField
        label="Usuário"
        name="username"
        placeholder="Insira seu nome de usuário"
        onInputChange={(v) => handleInput('username', v)}
        error={fieldError?.username}
      />
      <TextField
        label="Senha"
        name="password"
        type="password"
        placeholder="Insira sua senha"
        onInputChange={(v) => handleInput('password', v)}
        error={fieldError?.password}
      />
      <TextField
        label="Confirmar Senha"
        name="confirm_password"
        type="password"
        placeholder="Confirme sua senha"
        onInputChange={(v) => handleInput('confirm_password', v)}
        error={fieldError?.confirm_password}
      />
      <Button disabled={loading}>
        {loading ? 'Carregando...' : 'Criar conta'}
      </Button>
    </form>
  )
}

export default SignUpForm
