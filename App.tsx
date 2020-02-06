import React from 'react';
import logo from './header/facebook-logo.svg'
import './index.css';
import './normalize.css';
import Header from './header'
import Main from './Main'

const App = () => {
  return (
    <div> 
      <Header img = {logo}/>
      <Main />
    </div>
  );
}

export default App;
