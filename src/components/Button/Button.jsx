import React from "react";
import IconCart from "@icons/bt_added_to_cart.svg";
import { FaCartPlus } from "react-icons/fa";
import './Button.scss';

function Button({ type, typeButton, onClick, textButton, iconCart }) {
    return (
        <button onClick={onClick} type={typeButton} className={type}>
            {iconCart && <FaCartPlus alt="add to carrt" />}
            {textButton}
        </button>
    );
}

export default Button;
