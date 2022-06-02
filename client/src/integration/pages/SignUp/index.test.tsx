import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from '.'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate
}))

describe('<SignUp />', () => {
  it('should render the sign up page with components correctly', () => {
    render(<SignUp />)

    expect(screen.getByLabelText(/usuário/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/^senha/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /criar conta/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /voltar/i })).toBeInTheDocument()
  })

  it('should call navigate to / page if clicked on go back button', () => {
    render(<SignUp />)

    userEvent.click(screen.getByRole('button', { name: /voltar/i }))
    expect(mockedNavigate).toHaveBeenCalled()
    expect(mockedNavigate).toHaveBeenCalledWith('/')
  })

  it('should fill sign up and submit correctly', async () => {
    const mockedSignUp = jest
      .spyOn(require('services/users'), 'signUp')
      .mockImplementation(() => Promise.resolve())
    render(<SignUp />)

    const userData = {
      username: 'henrique',
      password: 'senha',
      confirm_password: 'senha'
    }
    const userInput = screen.getByLabelText(/usuário/i)
    const passwordInput = screen.getByLabelText(/^senha/i)
    const confirmPasswordInput = screen.getByLabelText(/confirmar senha/i)

    userEvent.type(userInput, userData.username)
    userEvent.type(passwordInput, userData.password)
    userEvent.type(confirmPasswordInput, userData.confirm_password)

    userEvent.click(screen.getByRole('button', { name: /criar conta/i }))

    expect(mockedSignUp).toHaveBeenCalledTimes(1)
    expect(mockedSignUp).toHaveBeenCalledWith(
      userData.username,
      userData.password
    )
  })
})
