import React from "react";
import IconCart from "@icons/bt_added_to_cart.svg";
import './Button.scss';

function Button({ type, typeButton, onClick, textButton, iconCart }) {
    return (
        <button onClick={onClick} type={typeButton} className={type}>
            {iconCart && <img src={IconCart} alt="add to carrt" />}
            {textButton}
        </button>
    );
}

export default Button;
