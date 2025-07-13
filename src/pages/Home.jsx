import { useState } from 'react'
import '../styles/Home.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='hero-container'>
      <h2>Hero Page Contents</h2>
    </div>
  )
}