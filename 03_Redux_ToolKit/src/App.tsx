// import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
// redux is the core library
// react-redux provides a way to connect React components to Redux store


function App() {

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
