import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemShoppingCart from "@components/ItemShoppingCart/ItemShoppingCart";
import Button from "@components/Button/Button";
import AppContext from "../../utils/context/AppContext";
import "./ShoppingCart.scss";
import ThanksView from "../../components/ThanksView/ThanksView";




function ShoppingCart() {
    const navigate = useNavigate();
    const { ShoppingCart, onPurchase } = useContext(AppContext);
    const [purchased, setPurchased] = useState(false)
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = ShoppingCart.reduce(reducer, 0);
        return sum;
    }
    const handlePurchase = () => {
        if(ShoppingCart.length === 0) {
            console.log("carrito vacio");
            return null;
        }
        onPurchase();
        setPurchased(true);
        console.log('gracias por comprar');
        navigate('/orders');
        setTimeout(() => {
        setPurchased(false);
        }, 3000);
    };
    return (
        <aside className="ShoppingCart">
            <div className="title-container">
                <p className="tittle">Shopping cart</p>
            </div>
            <div className="ShoppingCart-content">
                {ShoppingCart.map((product, index) => (
                    <ItemShoppingCart
                        indexValue={index}
                        key={index}
                        product={product}
                        OrderItem={false}
                    />
                ))}
                {purchased && <ThanksView />}
            </div>
            <div className="order">
                <p>
                    <span>TOTAL:</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <Button
                typeButton={"button"}
                textButton={!purchased ? "PURCHASE" : "THANKS"}
                type={"purchase-button"}
                onClick={() => handlePurchase()}
            />
        </aside>
    );
}

export default ShoppingCart;
