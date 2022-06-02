import { signIn, signUp } from '.'

/* 
  Dica: como foi mockado globalmente esse módulo, é necessario remover o mock
  Dica 2: como iremos testar várias chamadas com vários retornos diferentes é um ótimo caso para
  espiar e alterar o retorno do fetch em cada teste
*/

describe('signIn()', () => {
  it.todo('should call sign in with correct params')
  it.todo('should call sign in and return null if user does not exists')
  it.todo('should throw error if login fail')
})

describe('signUp()', () => {
  it.todo('should call sign up with correct params')
  it.todo('should throw error if sign up fail')
})
