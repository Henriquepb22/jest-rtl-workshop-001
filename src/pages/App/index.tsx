import { useEffect, useState } from 'react'
import Button from 'unit/components/Button'

function App() {
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
      <Button onClick={() => {}} size="lg">
        I'am a button
      </Button>
    </div>
  )
}

export default App
