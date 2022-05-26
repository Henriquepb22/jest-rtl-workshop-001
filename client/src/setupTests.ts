import '@testing-library/jest-dom'

jest.mock('services/users', () => ({
  signIn: jest.fn((username, password) => Promise.resolve([{ username }])),
  signUp: jest.fn((username, password) => Promise.resolve())
}))
