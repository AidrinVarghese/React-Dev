import axios from 'axios'
import React, { useState,createContext } from 'react'
import postLogin from './api/postLogin'


export const Auth = createContext({mail:"", login:() => {}})

const AuthContext = ({children}) => {
  const [mail,setMail] = useState("")

    const login =async (userDetails) => {
        return await postLogin(userDetails,setMail)
    }
  return (
    <Auth.Provider value = {{mail,login}}>{children}</Auth.Provider>
  )
}

export default AuthContext