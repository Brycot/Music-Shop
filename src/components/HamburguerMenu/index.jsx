import React from "react";
import "./HamburguerMenu.scss";

function HamburguerMenu({ handleToggleMobileMenu, toggleMobile }) {
    return (
        <button
            className={
                toggleMobile ? "HamburguerMenu--active" : "HamburguerMenu"
            }
            onClick={() => handleToggleMobileMenu()}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
}

export default HamburguerMenu;
