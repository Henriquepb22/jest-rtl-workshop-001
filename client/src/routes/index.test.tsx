import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { UserContext } from 'unit/hooks/use-user'
import { render } from 'utils/test-utils'
import Routes from '.'

jest.mock('integration/pages/SignIn', () => ({
  __esModule: true,
  default: function ({ children }: { children: React.ReactNode }) {
    return <div data-testid="signIn-mock">{children}</div>
  }
}))

jest.mock('integration/pages/SignUp', () => ({
  __esModule: true,
  default: function ({ children }: { children: React.ReactNode }) {
    return <div data-testid="signUp-mock">{children}</div>
  }
}))

jest.mock('integration/pages/Profile', () => ({
  __esModule: true,
  default: function ({ children }: { children: React.ReactNode }) {
    return <div data-testid="profile-mock">{children}</div>
  }
}))

describe('<AppRoutes />', () => {
  /*
    Não faz sentido testar uma biblioteca externa, a gente infere que ela
    já está testada, mas a gente precisa garantir que nossa funcionalidade está 
    correta, nesse caso se ao acessar uma rota o modúlo correto é carregado.
    é um bom caso de uso para o jest.mock
  */
  it('should render sign in page if url is /', async () => {
    render(
      <React.Suspense>
        <Routes />
      </React.Suspense>,
      { wrapper: MemoryRouter }
    )

    await waitFor(() => {
      expect(screen.getByTestId('signIn-mock')).toBeInTheDocument()
    })
  })

  it('should render sign up page if url is /signup', async () => {
    render(
      <React.Suspense>
        <MemoryRouter initialEntries={['/signup']}>
          <Routes />
        </MemoryRouter>
      </React.Suspense>
    )

    await waitFor(() => {
      expect(screen.getByTestId('signUp-mock')).toBeInTheDocument()
    })
  })

  it('should render profile page if url is /profile', async () => {
    render(
      <React.Suspense>
        <MemoryRouter initialEntries={['/profile']}>
          <UserContext.Provider
            value={{
              authenticated: true,
              login: jest.fn(),
              logout: jest.fn(),
              username: 'username'
            }}
          >
            <Routes />
          </UserContext.Provider>
        </MemoryRouter>
      </React.Suspense>
    )

    await waitFor(() => {
      expect(screen.getByTestId('profile-mock')).toBeInTheDocument()
    })
  })

  it('should redirect to / if url has no matchs', async () => {
    render(
      <React.Suspense>
        <MemoryRouter initialEntries={['/invalidUrl']}>
          <Routes />
        </MemoryRouter>
      </React.Suspense>
    )

    await waitFor(() => {
      expect(screen.getByTestId('signIn-mock')).toBeInTheDocument()
    })
  })
})
