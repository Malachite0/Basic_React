import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={reactLogo} alt="React Logo" />
          <h1>My Website</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="centering">
      <div className="infoVlak">

<h1 className='groteTekst'>tekst met afbeelding
</h1>
<img src="public/ruberto.PNG" alt="kat foto" className='fotoKat'/>
      </div></div>
    </>
  );
}

export default App
