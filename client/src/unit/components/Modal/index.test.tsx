import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from '.'

describe('<Modal />', () => {
  it('should render component Modal', () => {
    const { container } = render(<Modal>Content</Modal>)

    expect(container).toMatchSnapshot()
    expect(container).toBeInTheDocument()
  })

  it('should not find modal content', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
  })

  it('should find modal content only click button', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(screen.getByText(/content/i)).toBeInTheDocument()
  })

  it('should close modal clicking on overlay', () => {
    render(<Modal>Content</Modal>)

    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(screen.getByText(/content/i)).toBeInTheDocument()
    userEvent.click(screen.getByLabelText(/fechar modal/i))
    expect(screen.queryByText(/content/i)).not.toBeInTheDocument()
  })

  // it('should close modal with esc key', () => {
  //   // consultei e adaptei
  //   const { container } = render(<Modal>Content</Modal>)

  //   userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
  //   const modal = screen.queryByText(/content/i)
  //   expect(modal).toHaveAttribute('aria-hidden', 'false')

  //   fireEvent.keyUp(container, { key: 'Escape' })
  //   expect(modal).toHaveAttribute('aria-hidden', 'true')
  // })
})
