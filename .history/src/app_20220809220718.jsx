import styles from './app.module.css';
import Login from './components/login/login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({authService}) {
  return (
  <div className={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login authService={authService}/>}>

        </Route>
      </Routes>
    </BrowserRouter>
    
  </div>
  )
}

export default App;
