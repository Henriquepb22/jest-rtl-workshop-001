import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignInForm from './index'

describe('<SignInForm />', () => {
  it('should render component', () => {
    const { container } = render(<SignInForm />)

    expect(container).toMatchSnapshot()
  })

  it('should render the form correctly', () => {
    render(<SignInForm />)

    expect(
      screen.getByRole('form', { name: /formulário de login/i })
    ).toBeInTheDocument()
  })

  it('should fill and submit the form', () => {
    render(<SignInForm />)

    userEvent.type(screen.getByRole('textbox', { name: /usuário/i }), 'marco')
    userEvent.type(screen.getByLabelText(/senha/i), '1234')
    userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })

  it('should return error if field user incorrects', () => {
    render(<SignInForm />)

    userEvent.click(screen.getByRole('button', { name: /entrar/i }))
    expect(screen.getByText(/usuário obrigatório/i)).toBeInTheDocument()
    userEvent.type(screen.getByRole('textbox', { name: /usuário/i }), 'mar')
    userEvent.click(screen.getByRole('button', { name: /entrar/i }))
    expect(
      screen.getByText(/usuário precisa ter no mínimo 4 caracteres/i)
    ).toBeInTheDocument()
  })

  it('should return error if field password incorrects', () => {
    render(<SignInForm />)

    userEvent.click(screen.getByRole('button', { name: /entrar/i }))
    expect(screen.getByText(/senha obrigatória/i)).toBeInTheDocument()
    userEvent.type(screen.getByLabelText(/senha/i), '123')
    userEvent.click(screen.getByRole('button', { name: /entrar/i }))
    expect(
      screen.getByText(/senha precisa ter no mínimo 4 caracteres/i)
    ).toBeInTheDocument()
  })
})
