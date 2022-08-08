import styles from './app.module.css';
import Login from './components/login/login';
import React from 'react';

function App({authService}) {
  return (
  <div>
    <Login authService={authService}/>;
  </div>
  )
}

export default App;
