import React from "react";
import ShoppingCartIcon from "@icons/icon_shopping_cart.svg";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartCounter from "./ShoppingCartCounter/ShoppingCartCounter";
import AppContext from "../../utils/context/AppContext";

function IconShoppingCart() {
    const { ShoppingCart } = React.useContext(AppContext);

    return (
        <>
            <FaShoppingCart />
            {ShoppingCart.length > 0 && (
                <ShoppingCartCounter productsCart={ShoppingCart.length} />
            )}
        </>
    );
}

export default IconShoppingCart;
