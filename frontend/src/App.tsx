import { useState } from 'react'
import "./App.css"
import Home from './pages/Home'
import { Login } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-sm ">
<Login></Login>
 

    </div>
  )
}

export default App
