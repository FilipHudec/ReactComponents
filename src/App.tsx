import { useState } from 'react'
import './App.css'
import { Sequence } from './components/Sequence'

const App = () => {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1>Components</h1>
      <Sequence first={2} count={20} step={8}/>
   </>
   
  )
}

export default App
