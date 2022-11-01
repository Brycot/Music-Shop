import React, { useState } from "react";
import "./Header.scss";
import Logo from "@logos/logo_yard_sale.png";
import Arrow from "@icons/flechita.svg";
import IconShoppingCart from "../../components/IconShoppingCart/IconShoppingCart";
import NavLink from "../../components/NavLink/NavLink";
import { categories } from "@utils/categories";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import MobileMenu from "../MobileMenu/MobileMenu";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Link} from "react-router-dom";
import HamburguerMenu from "../../components/HamburguerMenu";

function Header({ setFilterValue }) {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };
    const handleToggleShoppingCart = () => {
        setToggleOrders(!toggleOrders);
    };
    const handleToggleMobileMenu = () => {
        setToggleMobile(!toggleMobile);
    };

    return (
        <nav className="navbar">
            {/* <img
                onClick={() => handleToggleMobileMenu()}
                src={Icon}
                alt="menu"
                className="menu"
            /> */}
            <HamburguerMenu
                handleToggleMobileMenu={handleToggleMobileMenu}
                toggleMobile={toggleMobile}
            />
            <div className="navbar-left">
                <Link to={"/"} className="nav-logo-navlink">
                    <img src={Logo} alt="logo" className="nav-logo" />
                </Link>
                <ul>
                    {categories.map((category) => (
                        <NavLink
                            key={category.text}
                            Text={category.text}
                            setFilterValue={setFilterValue}
                        />
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        pepe@example.com
                        <img src={Arrow} alt="flecha" />
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
            <MobileMenu
                setToggleMobile={setToggleMobile}
                toggleMobile={toggleMobile}
                setFilterValue={setFilterValue}
            />
        </nav>
    );
}

export default Header;
