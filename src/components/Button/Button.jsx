import React from "react";
import './Button.scss';

function Button({ type, typeButton, onClick, textButton }) {
    return (
        <button 
          onClick={onClick} 
          type={typeButton} 
          className={type}>
            {textButton}
        </button>
    );
}

export default Button;
