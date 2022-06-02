import { renderHook } from '@testing-library/react'
import { useUser } from '.'

describe('useUser()', () => {
  /*
    Aqui temos nosso hook personalizado então precisamos usar o renderHook para testar ele

    Dica: Como nosso hook utiliza o contexto é ideal adicionar o wrapper com o seu provider

    Dica 2: login e logout alteram vários estados, seria legal adicionar um act() em suas chamadas
  */
  it.todo('should return username if user is authenticated')
  it.todo('should login user correctly')
  it.todo('should logout user correctly')
})
