import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  it('should render correctly', () => {
    render(<TextField />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render with label', () => {
    render(<TextField label="label" name="label" />)

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

  it('should change its value when typing', () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="textfield"
        name="textfield"
      />
    )

    const input = screen.getByRole('textbox', { name: /textfield/i })
    const text = 'algum texto'
    userEvent.type(input, text)

    expect(input).toHaveValue(text)
    expect(onInputChange).toHaveBeenCalledTimes(text.length)
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="textfield"
        name="textfield"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'algum texto'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should render with error', () => {
    render(<TextField error="algum erro" />)

    expect(screen.getByText('algum erro')).toBeInTheDocument()
  })

  it('is accessible by tab', () => {
    render(<TextField label="textfield" name="textfield" />)

    const input = screen.getByLabelText('textfield')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('is not acessible by tab when disabled', () => {
    render(<TextField label="textfield" name="textfield" disabled />)

    const input = screen.getByLabelText('textfield')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })
})
