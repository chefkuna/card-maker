import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  }

  return <div className={styles.container}>
    <input 
      className={styles.input} 
      type="file" 
      accept="image/*" 
      name="file" 
    />
    <button className={styles.button} onClick={onButtonClick}>
      {name || "No file"}
    </button>
    

  </div>
}

export default ImageFileInput;