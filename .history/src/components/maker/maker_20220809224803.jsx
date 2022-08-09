import React, { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';

const Maker = ({authService}) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/');
      }
    })
  })

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <section className="cardMaker">
            <h1>Card Maker</h1>
          </section>
          <section className="cardPreview">
            <h1>Card Preview</h1>
          </section>
        </div>
      <Footer/>
    </section>
  );
};

export default Maker;