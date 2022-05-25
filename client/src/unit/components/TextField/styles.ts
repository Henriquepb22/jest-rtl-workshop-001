const textFieldWrapperClasses = ['flex', 'flex-col'].join(' ')

const textFieldClasses = (hasError?: boolean) =>
  [
    'bg-gray-200',
    'rounded',
    'p-2',
    'border-2',
    'border-gray-300',
    'hover:bg-white',
    'hover:border-2',
    'hover:border-pink-600',
    'focus:outline-pink-600',
    'focus:bg-white',
    hasError ? 'border-red-600' : ''
  ].join(' ')

const labelClasses = ['font-bold'].join(' ')

const errorTextClasses = ['text-sm', 'text-red-600'].join(' ')

export {
  textFieldWrapperClasses,
  errorTextClasses,
  textFieldClasses,
  labelClasses
}
