import { Sizes } from '.'

const buttonClassesVariants = {
  sm: ['w-8', 'p-1'],
  md: ['w-10', 'p-2'],
  lg: ['w-14', 'p-3']
}

const buttonClasses = (size: Sizes) => buttonClassesVariants[size].join(' ')

export { buttonClasses }
