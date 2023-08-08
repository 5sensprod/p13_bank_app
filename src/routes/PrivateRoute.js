import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

/**
 * PrivateRoute est un composant enveloppant pour protéger l'accès aux routes qui nécessitent une authentification.
 * Si l'utilisateur n'est pas connecté, il est redirigé vers la page d'accueil.
 * Sinon, les enfants du composant (c'est-à-dire la route protégée) sont rendus normalement.
 *
 * @example
 * ```jsx
 * <PrivateRoute>
 *   <ProtectedComponent />
 * </PrivateRoute>
 * ```
 *
 * @param {React.ReactNode} children - Les composants enfants qui sont rendus si l'utilisateur est authentifié.
 * @returns {React.ReactNode} - Renvoie les composants enfants si l'utilisateur est connecté, sinon redirige vers la page d'accueil.
 */
const PrivateRoute = ({ children }) => {
  // Récupère l'état de connexion de l'utilisateur du store Redux
  const { isLoggedIn } = useSelector((state) => state.user)

  // Si l'utilisateur n'est pas connecté, le rediriger vers la page d'accueil
  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  // Si l'utilisateur est connecté, afficher les composants enfants
  return children
}

export default PrivateRoute
