import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login } from './pages/login'
import { Register } from './pages/register'


import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './routes/protectedRoute'

function App() {
  

  return (
   <Register />
  )
}

export default App
