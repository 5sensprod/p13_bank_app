import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute'
import Transactions from '../pages/Transactions'

/**
 * AppRouter est le composant qui gère les différentes routes de l'application.
 * Il définit les chemins et les composants qui doivent être rendus à chaque chemin.
 * Les routes protégées nécessitant une authentification sont enveloppées par le composant PrivateRoute.
 *
 * @example
 * ```jsx
 * <AppRouter />
 * ```
 *
 * @returns {React.ReactNode} - Les routes de l'application.
 */

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
