import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Maker = ({ FileInput, authService }) => {
  const navigateState = useNavigate().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const deleteCard = card => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor 
          FileInput={FileInput}
          cards={cards} 
          addCard={createOrUpdateCard} 
          updateCard={createOrUpdateCard} 
          deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}
export default Maker;
