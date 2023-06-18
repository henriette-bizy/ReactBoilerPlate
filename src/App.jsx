import './App.css'

import { Dashboard } from './pages/dashboard'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { ProtectedRoute } from './routes/protectedRoute'
import { Display } from './pages/display'
import { Table } from './components/table'
// import Chart from './components/chart'

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <Router>
   <Routes>
    <Route element={<Login />} path='/login'></Route>
    <Route element={<Register />} path='/register'></Route>
    <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>} path='/dashboard'></Route>
    <Route element={<ProtectedRoute><Display /></ProtectedRoute>} path='/users'></Route>
    
    {/* <Route element={<Display />} path='/tablet'></Route>   */}
   </Routes>
   </Router>
  )
}

export default App
