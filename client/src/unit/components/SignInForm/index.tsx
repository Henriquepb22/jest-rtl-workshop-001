import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TextField from '../TextField'
import Button from '../Button'

import { signInFormClasses } from './styles'
import { useUser } from 'unit/hooks/use-user'

const SignInForm = () => {
  const { login } = useUser()
  const [values, setValues] = useState({ username: '', password: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleInput = (field: string, value: string) =>
    setValues((oldValues) => ({ ...oldValues, [field]: value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await login(values)
    setLoading(false)
    console.log(values)
  }

  const handleCreateAccount = () => navigate('/signup')

  return (
    <form onSubmit={onSubmit} className={signInFormClasses}>
      <TextField
        label="Usuário"
        name="username"
        placeholder="Insira seu nome de usuário"
        minLength={4}
        onInputChange={(v) => handleInput('username', v)}
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
      <Button disabled={loading}>{loading ? 'Carregando...' : 'Entrar'}</Button>
      <Button
        color="secondary"
        disabled={loading}
        type="button"
        onClick={handleCreateAccount}
      >
        Criar Conta
      </Button>
    </form>
  )
}

export default SignInForm
