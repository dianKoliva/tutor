import { useState } from 'react'
import "./App.css"
import Home from './pages/Home'
import About from "./pages/About"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-sm ">
   <Home></Home>

    </div>
  )
}

export default App
