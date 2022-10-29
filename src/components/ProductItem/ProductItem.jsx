import React, { useContext, useState } from "react";
import AppContext from "../../utils/context/AppContext";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import "./ProductItem.scss";

function ProductItem({ product }) {
    const navigate = useNavigate();
    const { addToCart, productInfoView, setProductInfoView } =
        useContext(AppContext);

    const handleClick = (item) => {
        navigate(`/`);
        addToCart(item);
        setProductInfoView(false);
    };
    const handleInfo = () => {
        navigate(`/product/${product.id}`);
        setProductInfoView(true);
    };
    return (
        <div className="ProductItem">
            <img
                onClick={handleInfo}
                src={product.images[0]}
                alt={product.title}
                className="ProductItem-img"
            />

            <div className="ProductItem-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <div className="IconAddShoppingCart" onClick={() => handleClick(product)}>
                    <FaCartPlus/>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
