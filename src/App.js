import React, { useState } from 'react';
import { BsSunFill, BsMoonFill, BsGrid } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Words from './components/Words';
import './styles/App.css';

function App() {
  const [screenMode, setScreenMode] = useState(false)

  const myLinks = {
    urlLinkedIn: 'https://www.linkedin.com/in/marcelo-mls/',
    urlGithub: 'https://github.com/marcelo-mls',
  };

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
        developed by Marcelo Marques
        <a href={myLinks.urlLinkedIn} target="_blank" rel="noreferrer">
          <FaLinkedin style={{ fontSize: '16px', padding: '0 4px 0 8px' }} />
        </a>
        <a href={myLinks.urlGithub} target="_blank" rel="noreferrer">
          <FaGithub style={{ fontSize: '16px', padding: '0 8px 0 4px' }} />
        </a>
      </footer>

    </div>
  );
}

export default App;
