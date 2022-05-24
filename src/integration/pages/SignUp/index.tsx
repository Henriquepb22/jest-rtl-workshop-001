import { useEffect, useState } from 'react'

import SignUpForm from 'unit/components/SignUpForm'

function SignUp() {
  const [x, setX] = useState(0)

  useEffect(() => {
    if (x === 1) return
  }, [])

  return (
    <div>
      <SignUpForm />
    </div>
  )
}

export default SignUp
