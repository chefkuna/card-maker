import React, { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';


const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'Ellie',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
    '2': {
      id: '2',
      name: 'Ellie2',
      company: 'Samsung',
      theme: 'light',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: 'ellie.png',
    },
    '3': {
      id: '3',
      name: 'Ellie3',
      company: 'Samsung',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'ellie@gmail.com',
      message: 'go for it',
      fileName: 'ellie',
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };

  const updateCard = card => {
    const updated = {...cards};
    updated[card.id] = card;
    setCards(updated);
  }
  };

  const deleteCard = card => {
    console.log(card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );

export default Maker;
