import React from "react";
import ShoppingCart from "@icons/icon_shopping_cart.svg";
import ShoppingCartCounter from "./ShoppingCartCounter/ShoppingCartCounter";
import AppContext from "../../utils/context/AppContext";

function IconShoppingCart() {
    const { state } = React.useContext(AppContext);

    return (
        <>
            <img src={ShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 && (
                <ShoppingCartCounter productsCart={state.cart.length} />
            )}
        </>
    );
}

export default IconShoppingCart;
