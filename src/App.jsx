import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './componest/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Login/>
  )
}

export default App
