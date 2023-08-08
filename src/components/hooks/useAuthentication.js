import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authenticateAndFetchProfile } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'

const useAuthentication = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const authenticate = async (username, password) => {
    try {
      const isSuccess = await dispatch(
        authenticateAndFetchProfile(username, password),
      )
      if (isSuccess) {
        navigate('/user')
      } else {
        throw new Error(
          "Erreur lors de l'authentification ou de la récupération du profil.",
        )
      }
    } catch (err) {
      console.error(err)
      setError(err.message)
      return err
    }
  }

  return { authenticate, error }
}

export default useAuthentication
