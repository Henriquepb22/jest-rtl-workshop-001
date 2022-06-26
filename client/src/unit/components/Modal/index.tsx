import { useEffect, useState } from 'react'
import Button from '../Button'

import { contentClasses, modalClasses, overlayClasses } from './styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <>
      <Button onClick={() => setOpen(true)}>abrir modal</Button>
      {open && (
        <div
          aria-label="modal"
          aria-hidden={!open}
          className={modalClasses(open)}
        >
          <div
            aria-label="fechar modal"
            onClick={() => setOpen(!open)}
            className={overlayClasses(open)}
          />
          <div className={contentClasses}>{children}</div>
        </div>
      )}
    </>
  )
}

export default Modal
