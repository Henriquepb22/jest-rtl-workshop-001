import { render, renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import {
  UserContext,
  UserContextDefaultValues,
  UserProvider,
  UserProviderProps,
  useUser
} from '.'

const fakeUser = {
  username: 'henrique',
  password: 'senha'
}

const wrapper = ({ children }: UserProviderProps) => (
  <UserProvider>{children}</UserProvider>
)

describe('useUser()', () => {
  /*
    Aqui é um belo caso de uso para testar algo que precisa ser encapsulado(Hooks, Contexts, HOCs) é o lugar ideal
    para se usar o renderHook para se testar hooks customizados
  */
  it('should authenticate user', async () => {
    const { result } = renderHook(() => useUser(), {
      wrapper
    })

    expect(result.current.username).toBe(null)
    expect(result.current.authenticated).toBe(false)

    await act(async () => {
      await result.current.login(fakeUser)
    })

    expect(result.current.username).toBe('henrique')
    expect(result.current.authenticated).toBe(true)
  })

  it('should not authenticate if user does not exists', async () => {
    const signInMock = jest.spyOn(require('services/users'), 'signIn')
    signInMock.mockReturnValueOnce(Promise.resolve())

    const { result } = renderHook(() => useUser(), {
      wrapper
    })

    await act(async () => {
      await result.current.login(fakeUser)
    })

    expect(result.current.username).toBe(null)
    expect(result.current.authenticated).toBe(false)

    signInMock.mockRestore()
  })

  it('should logout user correctly', async () => {
    const { result } = renderHook(() => useUser(), {
      wrapper
    })

    await act(async () => {
      await result.current.login(fakeUser)
    })

    expect(result.current.username).toBe('henrique')
    expect(result.current.authenticated).toBe(true)

    act(() => {
      result.current.logout()
    })

    expect(result.current.username).toBe(null)
    expect(result.current.authenticated).toBe(false)
  })

  it('should throw error if login fails', async () => {
    const signInMock = jest.spyOn(require('services/users'), 'signIn')
    signInMock.mockReturnValueOnce(Promise.reject('login error'))

    const { result } = renderHook(() => useUser(), {
      wrapper
    })

    try {
      result.current.login(fakeUser)
    } catch (err) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(err).toStrictEqual('login error')
    }

    signInMock.mockRestore()
  })

  it('should return null on default logout call', () => {
    expect(UserContextDefaultValues.logout()).toBeNull()
  })
})
