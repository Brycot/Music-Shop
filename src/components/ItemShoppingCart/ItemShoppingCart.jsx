import React from "react";
import IconClose from '@icons/icon_close.png';
import './ItemShoppingCart.scss';

function ItemShoppingCart() {
    return (
        <div className="shopping-cart">
            <figure>
                <img
                    src="https://cdn11.bigcommerce.com/s-oj8ea26qyc/images/stencil/1280x1280/products/867/5172/i97d1ruynsz8jgoncto0__29966.1602512396.jpg?c=1"
                    alt="Microphone"
                />
            </figure>
            <p>Shure SM7B</p>
            <p>$475.00</p>
            <img className="IconClose" src={IconClose} alt="X" />
        </div>
    );
}

export default ItemShoppingCart;
