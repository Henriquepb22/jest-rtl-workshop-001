import { render, screen } from '@testing-library/react'
import Modal from '.'

describe('<Modal />', () => {
  /*
    Aqui a gente pode ver a necessidade do uso do .not para garantir que
    antes de testarmos se um módulo está aparecendo na tela ele não estava
    aparecendo antes
    Por questões de performance o nosso modal precisa de uma refatoração para
    evitar que aumente a quantidade de elementos no dom e de lógica carregada
    sem necessidade
  */
  it('should find modal content if is opened', () => {
    render(
      <Modal>
        <span>Algum conteúdo do modal</span>
      </Modal>
    )

    // expect(
    //   screen.queryByText(/algum conteúdo do modal/i)
    // ).not.toBeInTheDocument()

    expect(screen.getByText(/algum conteúdo do modal/i)).toBeInTheDocument()
  })

  it.todo('should open modal')
  it.todo('should close modal clicking on overlay')
})
