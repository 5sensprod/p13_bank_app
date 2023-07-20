import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import User from '../pages/User'
import NotFound from '../pages/NotFound'
import PrivateRoute from './PrivateRoute'
import Transactions from '../pages/Transactions'

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
