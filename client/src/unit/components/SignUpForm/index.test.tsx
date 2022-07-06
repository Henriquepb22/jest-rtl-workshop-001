import { screen, render } from '@testing-library/react'
import SignUpForm from './index'

describe('<SignUpForm />', () => {
  it('should render the form correctly', () => {
    render(<SignUpForm />)

    expect(
      screen.getByRole('form', { name: /Formulário de cadastro/i })
    ).toBeInTheDocument()
  })
})
