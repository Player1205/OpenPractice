import { useState } from 'react'
import './App.css'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Student Management</h1>
     <Student name = "Rahul Ji" id = "123" email = "rahul.ji@example.com">Middle</Student>
  </>
  )
}

export default App
