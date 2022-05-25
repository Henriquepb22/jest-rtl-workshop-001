const modalBaseClasses = [
  'fixed',
  'inset-0',
  'w-full',
  'h-full',
  'flex',
  'justify-center',
  'items-center',
  'transition'
]

const modalVariantClasses = (isOpen: boolean) =>
  isOpen ? ['opacity-100'] : ['opacity-0', 'pointer-events-none']

const modalClasses = (isOpen: boolean) =>
  [...modalBaseClasses, ...modalVariantClasses(isOpen)].join(' ')

const overlayClasses = (isOpen: boolean) =>
  isOpen
    ? ['bg-black/30', 'w-full', 'h-full', 'fixed', 'inset-0', 'z-[5]'].join(' ')
    : ['pointer-events-none'].join(' ')

const contentClasses = [
  'p-8',
  'max-h-[80vh]',
  'max-w-full',
  'bg-gray-200',
  'z-[10]'
].join(' ')

export { modalClasses, overlayClasses, contentClasses }
