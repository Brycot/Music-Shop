import React, { useState } from "react";
import "./Header.scss";
import Icon from "@icons/icon_menu.svg";
import Logo from "@logos/logo_yard_sale.svg";
import Arrow from "@icons/flechita.svg";
import IconShoppingCart from "../../components/IconShoppingCart/IconShoppingCart";
import NavLink from "../../components/NavLink/NavLink";
import { categories } from "@utils/categories";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Header() {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const handleToggleShoppingCart = () => {
        setToggleOrders(!toggleOrders);
    };
    return (
        <nav className="navbar">
            <img src={Icon} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="nav-logo" />
                <ul>
                    {categories.map((category) => (
                        <NavLink key={category.text} Text={category.text} />
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        pepe@example.com
                        <img
                            onClick={() => console.log("feewf")}
                            src={Arrow}
                            alt="flecha"
                        />
                    </li>
                    <li
                        className="navbar-shopping-car"
                        onClick={handleToggleShoppingCart}
                    >
                        <IconShoppingCart />
                    </li>
                </ul>
            </div>
            {toggle && <DesktopMenu />}
            {toggleOrders && <ShoppingCart />}
        </nav>
    );
}

export default Header;
