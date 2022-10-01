import React from "react";
import ShoppingCartIcon from "@icons/icon_shopping_cart.svg";
import ShoppingCartCounter from "./ShoppingCartCounter/ShoppingCartCounter";
import AppContext from "../../utils/context/AppContext";

function IconShoppingCart() {
    const { ShoppingCart } = React.useContext(AppContext);

    return (
        <>
            <img src={ShoppingCartIcon} alt="shopping cart" />
            {ShoppingCart.length > 0 && (
                <ShoppingCartCounter productsCart={ShoppingCart.length} />
            )}
        </>
    );
}

export default IconShoppingCart;
