import React, { useState } from 'react'

import TextField from '../TextField'
import Button from '../Button'

const SignInForm = () => {
  const [values, setValues] = useState({ login: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) =>
    setValues((oldValues) => ({ ...oldValues, [field]: value }))

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log(values)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-80">
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
      <div className="mt-2">
        <Button disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
      </div>
    </form>
  )
}

export default SignInForm
