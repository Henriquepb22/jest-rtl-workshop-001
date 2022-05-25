import { useContext, createContext, useState } from 'react'

type UserContextData = {
  authenticated: boolean
  username: string | null
  login: (username: string, password: string) => void
  logout: () => void
}

export const UserContextDefaultValues = {
  authenticated: false,
  username: null,
  login: () => null,
  logout: () => null
}

export const UserContext = createContext<UserContextData>(
  UserContextDefaultValues
)

export type UserProviderProps = {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [username, setUsername] = useState<string | null>(null)

  const login = async (username: string, password: string) => {
    // await login
    try {
      setIsAuthenticated(true)
      setUsername(username)
    } catch (err) {
      console.error('login error: ', err)
    }
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUsername(null)
  }

  return (
    <UserContext.Provider
      value={{ authenticated: isAuthenticated, username, login, logout }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
