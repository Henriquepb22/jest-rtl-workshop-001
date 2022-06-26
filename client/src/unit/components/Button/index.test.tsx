import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('<Button />', () => {
  it('should render component', () => {
    const { container } = render(<Button>Entrar</Button>)

    expect(container).toMatchSnapshot()
  })

  it('should render the medium size be default', () => {
    render(<Button>Entrar</Button>)

    expect(screen.getByRole('button')).toHaveClass('px-4 py-2 text-base')
  })

  it('should render the primary color be default', () => {
    render(<Button>Entrar</Button>)

    expect(screen.getByRole('button')).toHaveClass('bg-pink-600 text-white')
  })

  it('should render the secondary color', () => {
    render(<Button color="secondary">Entrar</Button>)

    expect(screen.getByRole('button')).toHaveClass('bg-gray-300 text-black')
  })

  it('should render the small button variant', () => {
    render(<Button size="sm">Entrar</Button>)

    expect(screen.getByRole('button')).toHaveClass('px-2 py-1 text-sm')
  })

  it('should render the big button variant', () => {
    render(<Button size="lg">Entrar</Button>)

    expect(screen.getByRole('button')).toHaveClass('px-6 py-3 text-lg')
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Entrar</Button>)

    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should render a hover opacity', () => {
    render(<Button>Entrar</Button>)

    userEvent.hover(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveClass('hover:opacity-80')
  })

  it('should render a text children', () => {
    render(<Button>Entrar</Button>)

    expect(screen.getByRole('button')).toHaveTextContent(/entrar/i)
  })
})
