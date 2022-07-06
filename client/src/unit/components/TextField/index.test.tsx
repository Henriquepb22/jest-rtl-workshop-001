import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TextField from './index'

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render with label', () => {
    render(<TextField label="label" />)

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    render(<TextField placeholder="placeholder" />)

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument()
  })

  it('should render with error', () => {
    render(<TextField error="algum erro" />)

    expect(screen.getByText('algum erro')).toBeInTheDocument()
  })

  it.todo('should change its value when typing')
  it.todo('does not changes its value when disabled')
  it.todo('is accessible by tab')
  it.todo('is not acessible by tab when disabled')
})
