import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import App from '../../App'
import AuthContext from '../../components/AuthContext/AuthContext'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <AuthContext>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/tasks' element={<App/>}></Route>
      </Routes>
    </AuthContext>
    </BrowserRouter>
  )
}

export default AppRoutes