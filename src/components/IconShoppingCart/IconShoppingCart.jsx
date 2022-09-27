import React from "react";
import ShoppingCart from "@icons/icon_shopping_cart_notification.svg";
import ShoppingCartCounter from "./ShoppingCartCounter/ShoppingCartCounter";

function IconShoppingCart() {
    return (
        <>
            <img src={ShoppingCart} alt="shopping cart" />
            <ShoppingCartCounter productsCart={1}/>
        </>
    );
}

export default IconShoppingCart;
