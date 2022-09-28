import React from "react";
import ItemShoppingCart from "@components/ItemShoppingCart/ItemShoppingCart";
import "./Order.scss";


function Order() {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="tittle">My order</h1>
                <div className="my-order-content">
                    <div className="order-info">
                        <p>
                            <span>01.20.2022</span>
                            <span>6 articles</span>
                        </p>
                        <p>$1353.00</p>
                    </div>
                    <ItemShoppingCart OrderItem={true}/>
                    <ItemShoppingCart OrderItem={true}/>
                    <ItemShoppingCart OrderItem={true}/>
                </div>
            </div>
        </div>
    );
}

export default Order;
