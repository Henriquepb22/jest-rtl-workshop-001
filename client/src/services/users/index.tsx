const API_URL = 'http://localhost:8000'

type User = {
  username: string
  password: string
}

async function signIn(username: string, password: string) {
  try {
    const res = await fetch(
      `${API_URL}/users?username=${username}&password=${password}`
    )
    const data = (await res.json()) as User[]
    if (data[0]) {
      return data[0].username
    }
    return null
  } catch (error) {
    console.error(error)
  }
}

async function signUp(username: string, password: string) {
  try {
    const newUser = { username, password }
    await fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export { signIn, signUp }
