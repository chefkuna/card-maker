import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input 
        ref={nameRef} 
        className={styles.input} 
        type="text" 
        name="name" 
        placeholder="Name"/>
      <input 
        ref={companyRef} 
        className={styles.input} 
        type="text" 
        name="company" 
        placeholder="Company"/>
      <select ref={themeRef} className={styles.select} name="theme" placeholder="Theme">
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input 
        ref={titleRef} 
        className={styles.input} 
        type="text" 
        name="title" 
        placeholder="Title"/>
      <input 
        ref={emailRef} 
        className={styles.input} 
        type="text" 
        name="email" 
        placeholder="Email"/>
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message"/>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Add' onClick={onSubmit}/>
    
    </form>
  )
}

export default CardAddForm;