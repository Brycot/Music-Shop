import React from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import "./Orders.scss";

function Orders() {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="tittle">My orders</h1>
                <div className="my-order-content">
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
            </div>
        </div>
    );
}

import "./Orders.scss";

export default Orders;
