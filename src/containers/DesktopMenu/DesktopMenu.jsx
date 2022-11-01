import React from "react";
import { Link } from "react-router-dom";
import "./DesktopMenu.scss";

function DesktopMenu() {
    return (
        <div className="desktop-menu">
            <ul className="desktop-menu__ul">
                <li>
                    <Link to="/orders" className="title">
                        My orders
                    </Link>
                </li>
                <li>
                    <Link to="/account">My account</Link>
                </li>
                <li>
                    <Link to="/">Sing out</Link>
                </li>
            </ul>
        </div>
    );
}

export default DesktopMenu;
