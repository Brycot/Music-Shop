import React from "react";
import { Link } from "react-router-dom";
import Icon from "@icons/flechita.png";
import "./OrderItem.scss";

function OrderItem({ order }) {
    const sumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = order.buy.reduce(reducer, 0);
        return sum;
    };
    const totalArticles = order.buy.length;
    const date = order.date;
    return (
        <div className="orderItem">
            <p>
                <span>{date}</span>
                <span>{totalArticles} articles</span>
            </p>
            <p>${sumTotal()}</p>
            <Link to={`/orders/${order.id}`}>
                <img src={Icon} alt="arrow" />
            </Link>
        </div>
    );
}

export default OrderItem;
