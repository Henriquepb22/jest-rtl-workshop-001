import { ButtonHTMLAttributes } from 'react'
import { buttonClasses } from './styles'

export type Sizes = 'sm' | 'md' | 'lg'

type ButtonProps = {
  onClick: () => void
  size?: Sizes
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ onClick, size = 'md', children, ...props }: ButtonProps) => {
  return (
    <button className={buttonClasses(size)} onClick={onClick} {...props}>
      {!!children && <span>{children}</span>}
    </button>
  )
}

export default Button
