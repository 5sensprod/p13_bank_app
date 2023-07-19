export const authenticateUser = async (username, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('token', data.body.token)
      return data.body
    } else {
      throw new Error('Erreur de connexion : ' + response.status)
    }
  } catch (error) {
    console.log('Erreur spécifique :', error)
    throw new Error('Erreur générale lors de la connexion')
  }
}
