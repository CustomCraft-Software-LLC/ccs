import React from 'react';
import styles from './Button.css';

function Button({ name, type, onClick, children}) {
  return (
    <button 
        name={name} 
        type={type} 
        onClick={onClick}
        className={styles.Button}
    >
      {children}
    </button>
  );
}

export default Button;