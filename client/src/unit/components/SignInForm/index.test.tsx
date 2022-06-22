import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from 'utils/test-utils'
import SignInForm from '.'

describe('<SignInForm />', () => {
  it('should render the form correctly', () => {
    render(<SignInForm />)

    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /usuário/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('should fill and submit the form', () => {
    render(<SignInForm />)

    const fakeUser = {
      username: 'henrique',
      password: 'senha123'
    }

    userEvent.type(
      screen.getByRole('textbox', { name: /usuário/i }),
      fakeUser.username
    )
    userEvent.type(screen.getByLabelText(/senha/i), fakeUser.password)
    userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
  })

  it('should return error if field incorrects', () => {
    render(<SignInForm />)

    const fakeUser = {
      username: 'hen',
      password: '123'
    }

    userEvent.type(
      screen.getByRole('textbox', { name: /usuário/i }),
      fakeUser.username
    )
    userEvent.type(screen.getByLabelText(/senha/i), fakeUser.password)
    userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(screen.getByText(/senha precisa ter no mínimo/i)).toBeInTheDocument()
    expect(
      screen.getByText(/usuário precisa ter no mínimo/i)
    ).toBeInTheDocument()
    expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument()
  })
})
