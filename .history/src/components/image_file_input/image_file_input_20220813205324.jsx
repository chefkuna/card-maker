import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  }

  const onFileChange = (event) => {
    console.log(event.target.files[0]);
  }

  return <div className={styles.container}>
    <input 
      ref={inputRef}
      className={styles.input} 
      type="file" 
      accept="image/*" 
      name="file"
      onChange={onFileChange}
    />
    <button className={styles.button} onClick={onButtonClick}>
      {name || "No file"}
    </button>
  </div>
}

export default ImageFileInput;