import React, { useContext } from "react";
import ItemShoppingCart from "@components/ItemShoppingCart/ItemShoppingCart";
import Button from "@components/Button/Button";
import AppContext from "../../utils/context/AppContext";
import "./ShoppingCart.scss";

function ShoppingCart() {
    const { state } = useContext(AppContext);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
    return (
        <aside className="ShoppingCart">
            <div className="title-container">
                <img src="/assets/img/icons/flechita.svg" alt="arrow" />
                <p className="tittle">Shopping cart</p>
            </div>
            <div className="ShoppingCart-content">
                {state.cart.map((product, index) => (
                    <ItemShoppingCart
                        indexValue={index}
                        key={index}
                        product={product}
                        OrderItem={false}
                    />
                ))}
            </div>
            <div className="order">
                <p>
                    <span>TOTAL:</span>
                </p>
                <p>${sumTotal()}</p>
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
