import { render, screen } from '@testing-library/react'
import SignInForm from './index'

describe('<SignInForm />', () => {
  it('should render component', () => {
    const { container } = render(<SignInForm />)

    expect(container).toMatchSnapshot()
  })

  it('should render the form correctly', () => {
    render(<SignInForm />)

    expect(
      screen.getByRole('form', { name: /formulário de login/i })
    ).toBeInTheDocument()
  })

  // it('should fill and submit the form', () => {

  // })
  it.todo('should return error if field incorrects')
})
