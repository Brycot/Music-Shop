import React, { useContext } from "react";
import "./ProductItem.scss";
import AppContext from "../../utils/context/AppContext";
import iconAddToCart from "@icons/bt_add_to_cart.svg";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
    const { state, addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className="ProductItem">
            <Link to={`/product/${product.id}`}>
            <img
                src={product.images[0]}
                alt={product.title}
                className="ProductItem-img"
                />
            </Link>
            <div className="ProductItem-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={iconAddToCart} alt={"add to cart"} />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
