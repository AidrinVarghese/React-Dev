import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'

const Main = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/abc' element={"hi"} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default Main