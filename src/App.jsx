import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navi from './pages/Navi'
import Home from './pages/Home'

/**
 *  | Purpose          | Hex Code  | Description                          |
    | ---------------- | --------- | ------------------------------------ |
    | **Background**   | `#1E1E1E` | Deep neutral black (main backdrop)   |
    | **Surface**      | `#2A2A2A` | Slightly raised (cards, modals)      |
    | **Accent 1**     | `#FFB74D` | Light orange (buttons, highlights)   |
    | **Accent 2**     | `#D7A86E` | Caramel (focus, active elements)     |
    | **Accent 3**     | `#8D6E63` | Latte beige (borders, minor UI)      |
    | **Highlight**    | `#FFEFD5` | Cream (hover, selected areas)        |
    | **Text (Main)**  | `#FAF3E0` | Creamy off-white (primary text)      |
    | **Text (Muted)** | `#C0AFA0` | Muted cappuccino (labels, help text) |
    | **Error**        | `#FF6B6B` | Rosy red (deletes, alerts)           |
    | **Success**      | `#A3E635` | Matcha green (success states)        |
 */

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navi/>
      <Home/>
    </>
  )
}

export default App
