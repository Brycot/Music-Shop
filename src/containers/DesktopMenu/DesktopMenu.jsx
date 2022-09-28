import React from "react";
import "./DesktopMenu.scss";

function DesktopMenu() {
    return (
        <div className="desktop-menu">
            <ul className="desktop-menu__ul">
                <li>
                    <a href="/" className="title">
                        My orders
                    </a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sing out</a>
                </li>
            </ul>
        </div>
    );
}

export default DesktopMenu;
