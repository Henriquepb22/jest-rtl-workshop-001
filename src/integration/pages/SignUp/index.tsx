import { useEffect, useState } from 'react'
import Button from 'unit/components/Button'
import TextField from 'unit/components/TextField'

function SignUp() {
  const [x, setX] = useState(0)

  useEffect(() => {
    if (x === 1) return
  }, [])

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={() => {}}>I'am a button</Button>
      <Button onClick={() => {}} size="sm">
        I'am a button
      </Button>
      <Button onClick={() => {}} disabled size="lg">
        I'am a button
      </Button>
      <TextField />
    </div>
  )
}

export default SignUp
