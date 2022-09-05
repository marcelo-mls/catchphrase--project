import React, { useState, useEffect } from 'react';
import Words from './components/Words';
import './styles/App.css';
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';
import { BsSunFill, BsMoonFill, BsGrid } from "react-icons/bs";

function App() {
  const [screenMode, setScreenMode] = useState(false)

  const toggleScreenMode = () => {
    const toggleScreenMode = !screenMode
    setScreenMode(toggleScreenMode)
  }

  return (
    <div className={`App ${screenMode}`}>
      <header>
        <BsGrid className='icons' />
        <button>Catchphrase Game</button>
        <div className='icons' onClick={toggleScreenMode}>
          {screenMode === false ? <BsMoonFill /> : <BsSunFill />}
        </div>
      </header>

      <Words />

      <footer>
        developed by
        {' '}
        <a
          href='https://www.linkedin.com/in/marcelo-mls/'
          target='_blank'
          rel='noopener noreferrer'>@marcelo-mls</a>
        {' '}
        with React
      </footer>
    </div>
  );
}

export default App;
