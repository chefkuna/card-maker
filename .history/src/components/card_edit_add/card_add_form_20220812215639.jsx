import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" placeholder="Name"/>
      <input className={styles.input} type="text" name="company" placeholder="Company"/>
      <select className={styles.select} name="theme" placeholder={theme}>
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" placeholder="Title"/>
      <input className={styles.input} type="text" name="email" placeholder="Email"/>
      <textarea className={styles.textarea} name="message" placeholder="message"/>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    
    </form>
  )
}

export default CardAddForm;