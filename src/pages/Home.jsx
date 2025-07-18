import { useState } from 'react'
import '../styles/Home.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='hero-container'>
      <h2>Hero Page Contents</h2>
      <div className='hero-subcontainer'>
        <div className='hero-statement'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, accusamus, quisquam quibusdam modi suscipit dignissimos perspiciatis nostrum itaque, optio enim quis nisi alias inventore saepe! Obcaecati autem dolorum doloribus recusandae!
          </p>
        </div>
        <div className='hero-logo'>
          <h1> logo here </h1>
        </div>
      </div>
    </div>
  )
}