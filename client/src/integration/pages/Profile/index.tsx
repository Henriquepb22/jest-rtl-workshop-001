import Button from 'unit/components/Button'
import { useUser } from 'unit/hooks/use-user'

function Profile() {
  const { username, logout } = useUser()

  return (
    <div>
      <h1>Bem-vindo {username}!</h1>
      <Button onClick={logout}>Sair</Button>
    </div>
  )
}

export default Profile
