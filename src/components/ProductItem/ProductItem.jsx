import React from "react";
import "./ProductItem.scss";
import iconAddToCart from "@icons/bt_add_to_cart.svg";
function ProductItem() {
    return (
        <div className="ProductItem">
            <img
                src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="product-img"
                className="ProductItem-img"
            />
            <div className="ProductItem-info">
                <div>
                    <p>$120,00</p>
                    <p>Microphone</p>
                </div>
                <figure>
                    <img src={iconAddToCart} alt={"add to cart"} />
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;
