import React from "react";
import "./MobileMenu.scss";
import { categories } from "@utils/categories";
import NavLink from "../../components/NavLink/NavLink";
import { Link } from "react-router-dom";

function MobileMenu({ toggleMobile, setToggleMobile, setFilterValue }) {
    const handleClick = () => {
        setToggleMobile(false);
    };
    return (
        <div className={`${toggleMobile ? "mobile-menu-open" : "mobile-menu"}`}>
            <ul onClick={handleClick}>
                {categories.map((category) => (
                    <NavLink
                        key={category.text}
                        Text={category.text}
                        setFilterValue={setFilterValue}
                    />
                ))}
            </ul>
            <ul>
                <li>
                    <Link to="/orders" onClick={handleClick}>
                        My orders
                    </Link>
                </li>
                <li>
                    <Link to="/account" onClick={handleClick}>
                        My Account
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/" className="email">
                        pepe@example.com
                    </a>
                </li>
                <li>
                    <a href="/" className="sing-out">
                        Sing out
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;
