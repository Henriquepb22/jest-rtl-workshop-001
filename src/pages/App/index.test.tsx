import { render, screen } from '@testing-library/react'
import App from '.'

describe('<App />', () => {
  it('should render correctly', () => {
    render(<App />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })
})
