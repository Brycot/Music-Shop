import React from "react";
import Icon from "@icons/flechita.png";
import "./OrderItem.scss";

function OrderItem() {
    return (
        <div className="orderItem">
            <p>
                <span>01.20.2022</span>
                <span>6 articles</span>
            </p>
            <p>$1353.00</p>
            <img src={Icon} alt="arrow" />
        </div>
    );
}

export default OrderItem;
