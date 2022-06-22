import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render as customRender } from 'utils/test-utils'
import SignIn from '.'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}))

describe('<SignIn />', () => {
  /*
    Teste de integração é ideal para testar se o conjunto dos módulos vai
    funcionar corretamente, nesse caso se ao preencher o formulário e clicar
    em 'entrar' será realizado o login e feito o redirect (jest.mock)
  */

  it('should render the sign in page with components correctly', () => {
    render(<SignIn />)

    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()
  })

  it('should call navigate to /signup page if clicked on create account button', () => {
    render(<SignIn />)

    userEvent.click(screen.getByRole('button', { name: /criar conta/i }))
    expect(mockedNavigate).toHaveBeenCalled()
    expect(mockedNavigate).toHaveBeenCalledWith('/signup')
  })

  it('should fill sign in and login correctly', () => {
    const login = jest.fn()

    customRender(<SignIn />, {
      userProviderProps: {
        authenticated: false,
        username: null,
        logout: jest.fn(),
        login
      }
    })

    const userData = {
      username: 'henrique',
      password: 'senha'
    }
    const userInput = screen.getByLabelText(/usuário/i)
    const passwordInput = screen.getByLabelText(/senha/i)

    userEvent.type(userInput, userData.username)
    userEvent.type(passwordInput, userData.password)

    userEvent.click(screen.getByRole('button', { name: /entrar/i }))

    expect(login).toHaveBeenCalled()
    expect(login).toHaveBeenCalledWith(userData)
  })
})
