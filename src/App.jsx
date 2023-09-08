import React from 'react'
import ChatComponent from "./pages/ChatComponent"
import Navbar from "./pages/Navbar"
import { Route, Routes } from 'react-router-dom'
// import "./App.css"
const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col font-serif bg-slate-200'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ChatComponent/>}>
        </Route>

      </Routes>
    </div>
  )
}

export default App