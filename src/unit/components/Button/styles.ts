import { Sizes } from '.'

const baseButtonClasses = [
  'bg-pink-600',
  'rounded',
  'w-full',
  'text-white',
  'hover:opacity-90',
  'transition',
  'disabled:opacity-70',
  'disabled:cursor-not-allowed'
]

const buttonClassesVariants = {
  sm: ['px-2', 'py-1', 'text-sm'],
  md: ['px-4', 'py-2', 'text-base'],
  lg: ['px-6', 'py-3', 'text-lg']
}

const buttonClasses = (size: Sizes) =>
  [...buttonClassesVariants[size], ...baseButtonClasses].join(' ')

export { buttonClasses }
