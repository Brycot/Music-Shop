import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import AppContext from "../../utils/context/AppContext";
import "./ProductInfo.scss";

function ProductInfo({ product, active }) {
    const navigate = useNavigate();
    const { addToCart } = useContext(AppContext);
    const handdleClick = (item) => {
        addToCart(item);
        navigate("/");
    };
    return (
        <>
            <div className="degradado" />
            <img
                className="image-product-detail"
                src={product.images[0]}
                alt="apolloSolo"
            />
            <div className="product-info">
                <p>${product.price}</p>
                <p>{product.title}</p>
                <p>{product.info}</p>
                <Button
                    typeButton={"button"}
                    textButton={"ADD TO CART"}
                    type={"purchase-button add-to-cart-button"}
                    iconCart
                    onClick={() => handdleClick(product)}
                />
            </div>
        </>
    );
}

export default ProductInfo;
