import React from "react";
import ItemShoppingCart from "@components/ItemShoppingCart/ItemShoppingCart";
import Button from "@components/Button/Button";
import "./ShoppingCart.scss";

function ShoppingCart() {
    return (
        <aside className="ShoppingCart">
            <div className="title-container">
                <img src="/assets/img/icons/flechita.svg" alt="arrow" />
                <p className="tittle">Shopping cart</p>
            </div>
            <div className="my-order-content">
                <ItemShoppingCart />
            </div>
                <div className="order">
                    <p>
                        <span>TOTAL:</span>
                    </p>
                    <p>$1353.00</p>
                </div>
            <Button
                typeButton={"button"}
                textButton={"PURCHASE"}
                type={"purchase-button"}
            />
        </aside>
    );
}

export default ShoppingCart;
