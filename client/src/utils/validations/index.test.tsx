import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  /*
    A gente precisa testar tudo que o usuário verá visualmente, ou seja, até as mensagens de erro
    que podem aparecer para ele, nesse caso testamos se nossa função de validação está certa evitando
    que alterações nela façam o comportamento dos formulários alterar.
    
    Ex.: Alguém alterou a quantidade miníma de caracteres de 4 para 2 nosso teste pega esse erro antes
         de subir essa alteração
  */
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      expect(signInValidate({ username: '', password: '' }))
        .toMatchInlineSnapshot(`
        Object {
          "password": "senha obrigatória",
          "username": "usuário obrigatório",
        }
      `)
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      expect(
        signUpValidate({ username: '', password: '', confirm_password: '' })
      ).toMatchInlineSnapshot(`
        Object {
          "password": "senha obrigatória",
          "username": "usuário obrigatório",
        }
      `)
    })

    it('should return short username error', () => {
      expect(
        signUpValidate({
          username: 'abc',
          password: 'senha123',
          confirm_password: 'senha123'
        })
      ).toStrictEqual({
        username: 'usuário precisa ter no mínimo 4 caracteres'
      })
    })

    it('should return error if password and confirm password does not match', () => {
      expect(
        signUpValidate({
          username: 'username',
          password: 'senha123',
          confirm_password: 'senha321'
        })
      ).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "senhas não conferem",
        }
      `)
    })
  })
})
