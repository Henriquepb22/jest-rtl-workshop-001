import { useContext, createContext, useState } from 'react'
import { signIn } from 'services/users'

type UserData = {
  username: string
  password: string
}

type UserContextData = {
  authenticated: boolean
  username: string | null
  login: ({ username, password }: UserData) => Promise<void | null>
  logout: () => void
}

export const UserContextDefaultValues = {
  authenticated: false,
  username: null,
  login: async () => null,
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

  const login = async ({ username, password }: UserData) => {
    try {
      const user = await signIn(username, password)
      if (user) {
        setIsAuthenticated(true)
        setUsername(user)
      }
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
