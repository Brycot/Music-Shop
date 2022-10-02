import React from "react";
import ItemShoppingCart from "@components/ItemShoppingCart/ItemShoppingCart";
import "./Order.scss";
import { useParams } from "react-router-dom";
import useInitialState from "../../utils/hooks/useInitialState";


function Order() {
    const { orders, loadingOrder } = useInitialState();
    const { code } = useParams();
    const order = orders.find((item) => item.id == code);
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = order.buy.reduce(reducer, 0);
        return sum;
    };
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="tittle">My order</h1>
                <div className="my-order-content">
                    <div className="order-info">
                        {!loadingOrder && (
                            <>
                                <p>
                                    <span>{order.date}</span>
                                    <span>{order.buy.length} articles</span>
                                </p>
                                <p>${sumTotal()}</p>
                            </>
                        )}
                    </div>
                    {!loadingOrder &&
                        order.buy.map((item) => (
                            <ItemShoppingCart product={item} key={item.id} OrderItem={true} />
                        ))}
                    {/* <ItemShoppingCart OrderItem={true}/>
                    <ItemShoppingCart OrderItem={true}/>
                    <ItemShoppingCart OrderItem={true}/> */}
                </div>
            </div>
        </div>
    );
}

export default Order;
