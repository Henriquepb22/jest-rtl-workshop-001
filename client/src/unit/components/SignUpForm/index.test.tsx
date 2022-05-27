import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from 'utils/test-utils'
import SignUpForm from '.'

describe('<SignUpForm />', () => {
  it('should render the form correctly', () => {
    render(<SignUpForm />)

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /usuário/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/^senha/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()
  })

  it('should fill and submit the form', async () => {
    render(<SignUpForm />)

    const fakeUser = {
      username: 'henrique',
      password: 'senha123'
    }

    userEvent.type(
      screen.getByRole('textbox', { name: /usuário/i }),
      fakeUser.username
    )
    userEvent.type(screen.getByLabelText(/^senha/i), fakeUser.password)
    userEvent.type(screen.getByLabelText(/confirmar senha/i), fakeUser.password)
    userEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })

  it('should return error if field incorrects', async () => {
    render(<SignUpForm />)

    const fakeUser = {
      username: 'hen',
      password: '123',
      confirm_password: '321'
    }

    userEvent.type(
      screen.getByRole('textbox', { name: /usuário/i }),
      fakeUser.username
    )
    userEvent.type(screen.getByLabelText(/^senha/i), fakeUser.password)
    userEvent.type(
      screen.getByLabelText(/confirmar senha/i),
      fakeUser.confirm_password
    )
    userEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    expect(screen.getByText(/senha precisa ter no mínimo/i)).toBeInTheDocument()
    expect(
      screen.getByText(/usuário precisa ter no mínimo/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/senhas não conferem/i)).toBeInTheDocument()
    expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument()
  })
})
