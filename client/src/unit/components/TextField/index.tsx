import React, { InputHTMLAttributes, useState } from 'react'
import {
  labelClasses,
  textFieldClasses,
  textFieldWrapperClasses,
  errorTextClasses
} from './styles'

type TextFieldProps = {
  label?: string
  onInputChange?: (value: string) => void
  initialValue?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  initialValue = '',
  onInputChange,
  error,
  name,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)
    !!onInputChange && onInputChange(newValue)
  }

  return (
    <div className={textFieldWrapperClasses}>
      {!!label && (
        <label className={labelClasses} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={textFieldClasses(!!error)}
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        {...(label ? { id: name } : {})}
        {...props}
      />
      {!!error && <span className={errorTextClasses}>{error}</span>}
    </div>
  )
}

export default TextField
