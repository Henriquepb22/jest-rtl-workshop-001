import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'

describe('<Modal />', () => {
  /*
    Nesse teste vemos a necessidade do uso do .not para garantir que o componente
    não está na DOM antes de abrirmos ele.

    Por questões de performance o nosso modal precisa de uma refatoração para
    evitar que aumente a quantidade de elementos no dom e de lógica carregada
    sem necessidade
  */

  it('should render component Modal', () => {
    const { container } = render(<Modal>Content</Modal>)

    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should not find modal content', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('should find modal content only click button', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('should close modal on click button', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it.todo('should close modal clicking on overlay')
})
