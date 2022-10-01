import React from "react";
import Icon from "@icons/flechita.png";
import "./OrderItem.scss";

function OrderItem(order) {

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = order.order.buy.reduce(reducer, 0);
        return sum;
    };
    const totalArticles = order.order.buy.length;
    const date = order.order.date;
    return (
        <div className="orderItem">
            <p>
                <span>{date}</span>
                <span>{totalArticles} articles</span>
            </p>
            <p>${sumTotal()}</p>
            <img src={Icon} alt="arrow" />
        </div>
    );
}

export default OrderItem;
