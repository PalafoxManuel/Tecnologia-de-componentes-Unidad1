import React from 'react';
import '../cssComponents/ButtonSearchcss.css';

const Button = ({ onClick, text, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>{text}</button>
  );
};

export default Button;