import React from "react";
import OrderItem from "../../components/OrderItem/OrderItem";
import useInitialState from "../../utils/hooks/useInitialState";
import "./Orders.scss";

function Orders() {
    const { orders } = useInitialState();
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="tittle">My orders</h1>
                <div className="my-order-content">
                    {orders.map((order) => (
                        <OrderItem key={order.id} order={order}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

import "./Orders.scss";

export default Orders;
