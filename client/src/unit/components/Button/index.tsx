import { ButtonHTMLAttributes } from 'react'
import { buttonClasses } from './styles'

export type Sizes = 'sm' | 'md' | 'lg'

type ButtonProps = {
  size?: Sizes
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ size = 'md', children, ...props }: ButtonProps) => {
  return (
    <button className={buttonClasses(size)} {...props}>
      {!!children && <span>{children}</span>}
    </button>
  )
}

export default Button
