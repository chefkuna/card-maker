import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ( {card, updateCard, deleteCard } ) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  
  const {
    name, 
    company, 
    title, 
    email, 
    message, 
    theme, 
    fileName, 
    fileURL } = card;
  
  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  const onSubmit = () => {};
  
  return (
    <form ref={formRef} className={styles.form}>
      <input 
        ref={nameRef}
        className={styles.input} 
        type="text" 
        name="name" 
        defaultValue={name}
        onChange={onChange} 
      />
      <input 
        ref={companyRef}
        className={styles.input} 
        type="text" 
        name="company" 
        defaultValue={company}
        onChange={onChange} 
      />
      <select 
        ref={themeRef}
        className={styles.select} 
        name="theme" 
        defaultValue={theme}
        onChange={onChange} 
      >
          <option defaultValue="light">light</option>
          <option defaultValue="dark">dark</option>
          <option defaultValue="colorful">colorful</option>
      </select>
      <input 
        ref={titleRef}
        className={styles.input} 
        type="text" 
        name="title" 
        defaultValue={title}
        onChange={onChange}   
      />
      <input 
        ref={emailRef}
        className={styles.input} 
        type="text" 
        name="email" 
        defaultValue={email}
        onChange={onChange}   
      />
      <textarea 
        ref={messageRef}
        className={styles.textarea} 
        name="message" 
        defaultValue={message}
        onChange={onChange} 
      />
      <div 
        className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name='Delete' onClick={onSubmit}/>
    </form>
  )
}

export default CardEditForm;