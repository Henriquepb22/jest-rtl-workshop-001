import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  /*
    A gente precisa testar todas nossas funções, nesse caso podemos testar 
    se nossa função de validação está certa evitando que alterações nela façam o 
    comportamento dos formulários alterar.
 
    Ex.: Alguém alterou a quantidade miníma de caracteres de 4 para 2 nosso teste pega esse erro antes
         de subir essa alteração.

    Dica: Podemos utilizar tanto .toMatchInlineSnapshot() quanto .toStrictEqual()
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
