import { useState } from 'react'
import Button from '../Button'

import { contentClasses, modalClasses, overlayClasses } from './styles'

type ModalProps = {
  children: React.ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>abrir modal</Button>
      <div
        aria-label="modal"
        aria-hidden={!open}
        className={modalClasses(open)}
      >
        <div
          onClick={() => setOpen((v) => !v)}
          className={overlayClasses(open)}
        />
        <div className={contentClasses}>{children}</div>
      </div>
    </>
  )
}

export default Modal
