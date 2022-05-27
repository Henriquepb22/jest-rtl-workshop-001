import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'

describe('<Modal />', () => {
  /*
    Aqui a gente pode ver a necessidade do uso do .not para garantir que
    antes de testarmos se um módulo está aparecendo na tela ele não estava
    aparecendo antes
    Por questões de performance o nosso modal precisa de uma refatoração para
    evitar que aumente a quantidade de elementos na DOM e de lógica carregada
    sem necessidade
  */
  it('should find modal content if is opened', () => {
    render(
      <Modal>
        <span>Algum conteúdo do modal</span>
      </Modal>
    )

    // Esse teste precisa passar
    // expect(
    //   screen.queryByText(/algum conteúdo do modal/i)
    // ).not.toBeInTheDocument()

    expect(screen.getByText(/algum conteúdo do modal/i)).toBeInTheDocument()
  })

  it('should handle open modal', () => {
    render(
      <Modal>
        <span>Algum texto</span>
      </Modal>
    )

    const modal = screen.getByLabelText('modal')

    expect(modal).toHaveAttribute('aria-hidden', 'true')
    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(modal).toHaveAttribute('aria-hidden', 'false')
  })

  it('should close modal clicking on overlay', () => {
    render(
      <Modal>
        <span>Algum texto</span>
      </Modal>
    )

    const modal = screen.getByLabelText('modal')

    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(modal).toHaveAttribute('aria-hidden', 'false')

    userEvent.click(screen.getByLabelText(/fechar modal/i))
    expect(modal).toHaveAttribute('aria-hidden', 'true')
  })

  it('should close modal with esc key', () => {
    const { container } = render(
      <Modal>
        <span>Algum texto</span>
      </Modal>
    )

    const modal = screen.getByLabelText('modal')

    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(modal).toHaveAttribute('aria-hidden', 'false')

    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal).toHaveAttribute('aria-hidden', 'true')
  })
})
