import * as React from 'react';
import './Button.css';

interface ButtonProps { 
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props}) => {
  return (
    <button 
        type="button" 
        className="button"
        {...props}
    >
      {label}
    </button>
  );
}

export default Button;