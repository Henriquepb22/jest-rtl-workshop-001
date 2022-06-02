import { render, screen } from '@testing-library/react'
import Modal from '.'

describe('<Modal />', () => {
  /*
    Nesse teste vemos a necessidade do uso do .not para garantir que o componente
    não está na DOM antes de abrirmos ele.

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
    // ).not.toBeInTheDocument() esse teste PRECISA passar
  })

  it.todo('should open modal')
  it.todo('should close modal clicking on overlay')
})
