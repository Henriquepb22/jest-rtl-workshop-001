import { ButtonHTMLAttributes } from 'react'
import { buttonClasses } from './styles'

export type Sizes = 'sm' | 'md' | 'lg'
export type Colors = 'primary' | 'secondary'

type ButtonProps = {
  size?: Sizes
  color?: Colors
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  size = 'md',
  color = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonClasses(color, size)} {...props}>
      {!!children && <span>{children}</span>}
    </button>
  )
}

export default Button
