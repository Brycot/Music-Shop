import React from "react";
import './MobileMenu.scss';
import { categories } from '@utils/categories';
import NavLink from "../../components/NavLink/NavLink";

function MobileMenu() {
    return (
        <div className="mobile-menu">
            <ul>
                {categories.map((category) => (
                    <NavLink key={category.text} Text={category.text} />
                ))}
            </ul>
            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                    <a href="/">My Account</a>
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
