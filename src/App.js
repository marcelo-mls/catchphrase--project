import React, { useState, useEffect } from 'react';
import Words from './components/Words';
import './styles/App.css';
import sunIcon from './images/sun.png';
import moonIcon from './images/moon.png';
import { BsSunFill, BsMoonFill, BsGrid } from "react-icons/bs";

function App() {
  const [screenMode, setScreenMode] = useState('default')
  const [screenModeIcon, setScreenModeIcon] = useState(moonIcon)

  const toggleScreenMode = () => {
    const toggleScreenMode = screenMode === 'default'
      ? ['dark', sunIcon]
      : ['default', moonIcon]

    setScreenMode(toggleScreenMode[0])
    setScreenModeIcon(toggleScreenMode[1])
  }

  return (
    <div className={`App ${screenMode}`}>
      <header>
        <BsGrid className='icons' style={{ fontSize: '36px' }} />
        <img
          src="https://cdn-icons-png.flaticon.com/512/6423/6423878.png"
          alt="menu"
        />
        <button>Catchphrase Game</button>
        <BsMoonFill className='icons' style={{ fontSize: '36px' }} />
        <BsSunFill className='icons' style={{ fontSize: '36px' }} />
        <img
          onClick={toggleScreenMode}
          src={screenModeIcon}
          alt="dark mode"
        />
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
