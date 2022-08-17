import React from 'react';
import Words from './components/Words';
import './styles/App.css';
import sunIcon from './images/sun.png'
import moonIcon from './images/moon.png'

// menu: https://cdn-icons-png.flaticon.com/512/6423/6423878.png
// dark mode: https://cdn-icons-png.flaticon.com/512/702/702471.png
// light mode: https://cdn-icons-png.flaticon.com/512/66/66275.png

class App extends React.Component {
  state = {
    screenMode: 'default',
    screenModeIcon: moonIcon, 
  }

  setScreenMode = () => {
    const { screenMode } = this.state;
    const toggleScreenMode =
      screenMode === 'default' ? ['dark', sunIcon] : ['default', moonIcon]
    this.setState({
      screenMode: toggleScreenMode[0],
      screenModeIcon: toggleScreenMode[1]
    })
  }

  render (){
    const { screenMode, screenModeIcon } = this.state;
    return (
      <div className={ `App ${screenMode}` }>
        <header>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6423/6423878.png"
            alt="menu"
          />
          <button>Catchphrase Game</button>
          <img
            onClick={ this.setScreenMode }
            src={ screenModeIcon }
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
}

export default App;
