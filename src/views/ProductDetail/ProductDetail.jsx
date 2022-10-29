import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ProductInfo from "../../containers/ProductInfo/ProductInfo";
import productsData from "../../utils/products";
import AppContext from "../../utils/context/AppContext";
import { FaPlus } from "react-icons/fa";
import "./ProductDetail.scss";

function ProductDetail() {
    const navigate = useNavigate();
    const { productID } = useParams();
    const { productInfoView, setProductInfoView } = useContext(AppContext);
    const product = productsData.find((item) => item.id == productID);

    const handleClose = () => {
        setProductInfoView(false);
        setTimeout(() => {
            navigate("/");
        }, 150);
    };

    return (
        <div className={`product-detail-container`} onClick={handleClose}>
            <section
                className={`${
                    productInfoView
                        ? "product-detail-complete"
                        : "product-detail"
                }`}
            >
                <div className="product-detail-close">
                    <div onClick={handleClose} className="icon-close">
                        <FaPlus />
                    </div>
                </div>
                <ProductInfo product={product} />
            </section>
        </div>
    );
}

export default ProductDetail;
