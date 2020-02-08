import React from 'react';
import * as ReactRedux from 'react-redux'
import logo from './header/facebook-logo.svg'
import Header from './header'
import store from '../redux/configureStore'
import Routes from './Routes'

//app principal
const App = () => {
  return (

    <div> 
      <Header img = {logo}/>
      <Routes />
    </div>
  
  );
}

export default App;
