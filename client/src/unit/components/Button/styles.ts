import { Colors, Sizes } from '.'

const baseButtonClasses = [
  'rounded',
  'w-full',
  'transition',
  'hover:opacity-80',
  'disabled:opacity-70',
  'disabled:cursor-not-allowed'
]

const buttonSizesClassesVariants = {
  sm: ['px-2', 'py-1', 'text-sm'],
  md: ['px-4', 'py-2', 'text-base'],
  lg: ['px-6', 'py-3', 'text-lg']
}

const buttonColorClassesVariants = {
  primary: ['bg-pink-600', 'text-white'],
  secondary: ['bg-gray-300', 'text-black']
}

const buttonClasses = (color: Colors, size: Sizes) =>
  [
    ...buttonSizesClassesVariants[size],
    ...buttonColorClassesVariants[color],
    ...baseButtonClasses
  ].join(' ')

export { buttonClasses }
