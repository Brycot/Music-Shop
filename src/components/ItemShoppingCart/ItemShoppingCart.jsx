import React, { useContext } from "react";
import IconClose from "@icons/icon_close.png";
import AppContext from "../../utils/context/AppContext";
import "./ItemShoppingCart.scss";
import { FaPlus } from "react-icons/fa";

function ItemShoppingCart({ OrderItem, product, indexValue }) {
    const { removeFromCart, ShoppingCart } = useContext(AppContext);
    const handdleRemove = (index) => {
        removeFromCart(index);
    };
    return (
        <div className={"shopping-cart"}>
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            {!OrderItem && (
                <FaPlus
                    className="IconClose"
                    onClick={() => handdleRemove(indexValue)}
                    src={IconClose}
                    alt="X"
                />
                // <img
                //     className="IconClose"
                //     onClick={() => handdleRemove(indexValue)}
                //     src={IconClose}
                //     alt="X"
                // />
            )}
        </div>
    );
}

export default ItemShoppingCart;
