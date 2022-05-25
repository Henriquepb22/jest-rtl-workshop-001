import React, { useState } from 'react'

import { FieldErrors, signInValidate } from 'utils/validations'
import { useUser } from 'unit/hooks/use-user'
import TextField from '../TextField'
import Button from '../Button'

import { signInFormClasses } from './styles'

const SignInForm = () => {
  const { login } = useUser()
  const [values, setValues] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const handleInput = (field: string, value: string) =>
    setValues((oldValues) => ({ ...oldValues, [field]: value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }
    setFieldErrors({})

    await login(values)
    setLoading(false)
  }

  return (
    <form onSubmit={onSubmit} className={signInFormClasses}>
      <TextField
        label="Usuário"
        name="username"
        placeholder="Insira seu nome de usuário"
        onInputChange={(v) => handleInput('username', v)}
        error={fieldErrors?.username}
      />
      <TextField
        label="Senha"
        name="password"
        type="password"
        placeholder="Insira sua senha"
        onInputChange={(v) => handleInput('password', v)}
        error={fieldErrors?.password}
      />
      <Button disabled={loading}>{loading ? 'Carregando...' : 'Entrar'}</Button>
    </form>
  )
}

export default SignInForm
