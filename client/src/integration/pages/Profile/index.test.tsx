import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from 'utils/test-utils'
import Profile from '.'

describe('<Profile />', () => {
  /* 
    Aqui a gente faz tanto teste unitário quanto de integração, testando exatamente
    todos os comportamentos da página
  */
  it('should render the profile page with components correctly', () => {
    render(<Profile />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sair/i })).toBeInTheDocument()
  })

  it('should show logged user name', () => {
    render(<Profile />, {
      userProviderProps: {
        username: 'usuario2',
        authenticated: true,
        login: jest.fn(),
        logout: jest.fn()
      }
    })

    expect(
      screen.getByRole('heading', { name: /usuario2/i })
    ).toBeInTheDocument()
  })

  it('should logout', () => {
    const logout = jest.fn()
    render(<Profile />, {
      userProviderProps: {
        username: 'usuario2',
        authenticated: true,
        login: jest.fn(),
        logout
      }
    })

    userEvent.click(screen.getByRole('button', { name: /sair/i }))

    expect(logout).toHaveBeenCalled()
  })
})
