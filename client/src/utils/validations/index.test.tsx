import { screen } from '@testing-library/react'

describe('validations', () => {
  /*
    A gente precisa testar tudo que o usuário verá visualmente, ou seja, até as mensagens de erro
    que podem aparecer para ele, nesse caso testamos se nossa função de validação está certa evitando
    que alterações nela façam o comportamento dos formulários alterar.
    
    Ex.: Alguém alterou a quantidade miníma de caracteres de 4 para 2 nosso teste pega esse erro antes
         de subir essa alteração
  */
  describe('signInValidate()', () => {
    it.todo('should validate empty fields')
  })

  describe('signUpValidate()', () => {
    it.todo('should validate empty fields')
    it.todo('should return short username error')
    it.todo(
      'should return error if password and confirm password does not match'
    )
  })
})
