import React from "react";
import "./Header.scss";
import Icon from "@icons/icon_menu.svg";
import Logo from "@logos/logo_yard_sale.svg";
import Arrow from "@icons/flechita.svg";
import IconShoppingCart from "../../components/IconShoppingCart/IconShoppingCart";
import NavLink from "../../components/NavLink/NavLink";
import { categories } from '@utils/categories'
function Header() {
    return (
        <nav className="navbar">
            <img src={Icon} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="nav-logo" />
                <ul>
                    {categories.map((categorie) => (
                        <NavLink Text={categorie.text} />
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        pepe@example.com
                        <img src={Arrow} alt="flecha" />
                    </li>
                    <li className="navbar-shopping-car">
                        <IconShoppingCart />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
