import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ( {card} ) => {
  const {
    name, 
    company, 
    title, 
    email, 
    message, 
    theme, 
    fileName, 
    fileURL } = card;
  const onSubmit = () => {

  };
  
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" defaultvalue={name}/>
      <input className={styles.input} type="text" name="company" defaultvalue={company}/>
      <select className={styles.select} name="theme" defaultvalue={theme}>
        <option defaultvalue="light">light</option>
        <option defaultvalue="dark">dark</option>
        <option defaultvalue="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" defaultvalue={title}/>
      <input className={styles.input} type="text" name="email" defaultvalue={email}/>
      <textarea className={styles.textarea} name="message" defaultvalue={message}/>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    
    </form>
  )
}

export default CardEditForm;