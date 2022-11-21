import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Main from "./components/Main"

function App() {
  const [lightMode, setLightMode] = useState(false)

  function toggleLightMode() {
     setLightMode(prevMode => !prevMode)
  }

  return (
    <div className="App">
      <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode} />
      <Main lightMode={lightMode} />
    </div>
  );
}

export default App;
