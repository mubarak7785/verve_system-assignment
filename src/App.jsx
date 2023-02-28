import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './Components/Home/Home'
import { Login } from './Components/Login/Login'
import { Signup } from './Components/SignUp/Signup'

function App() {
  

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     
    </div>
  )
}

export default App
