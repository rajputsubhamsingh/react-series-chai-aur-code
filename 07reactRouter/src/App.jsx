import { useState } from 'react'  
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 p-4'>Hello Ji</h1>
      <Header />
    </>
  )
}

export default App
