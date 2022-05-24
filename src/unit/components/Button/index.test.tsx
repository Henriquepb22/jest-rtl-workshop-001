import { render, screen } from '@testing-library/react'

describe('<Button />', () => {
  /*
    O Primeiro teste é recomendado ser sempre a variação 'padrão' do seu módulo,
    sendo passado o minimo de props necessária para sua renderização

    PS:. Ao finalizar a criação do módulo é uma boa prática adicionar um snapshot,
         assim qualquer alteração feita posteriormente irá quebrar o snapshot pra ver
         se realmente a alteração é necessária
         https://jestjs.io/docs/snapshot-testing#:~:text=Snapshot%20tests%20are%20a%20very,file%20stored%20alongside%20the%20test.
  */
  it.todo('should render the button correctly')

  /*
    Os próximos testes a gente vai testando todas as variações e interações do módulo,
    separando cada uma em um it separado
  */
  it.todo('should render the small button variant')
  it.todo('should render the big button variant')
  it.todo('should call onClick after click')
})
