import React from 'react';

function Button({ name, type, onClick, children}) {
  return (
    <button 
        name={name} 
        type={type} 
        onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;