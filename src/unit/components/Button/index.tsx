import { buttonClasses } from './styles'

export type Sizes = 'sm' | 'md' | 'lg'

type ButtonProps = {
  onClick: () => void
  size?: Sizes
  children: React.ReactNode
}

const Button = ({ onClick, size = 'md', children }: ButtonProps) => {
  return (
    <button className={buttonClasses(size!)} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
