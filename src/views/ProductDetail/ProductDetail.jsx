import React from "react";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../../containers/ProductInfo/ProductInfo";
import productsData from "../../utils/products";
import "./ProductDetail.scss";

function ProductDetail() {
    const { productID } = useParams();
    const product = productsData.find((item) => item.id == productID);
    return (
        <div
            className={`product-detail-container`}
        >
            <section className="product-detail-complete">
                <div className="product-detail-close">
                    <Link to={"/"}>
                        <div className="icon-close">
                            <img
                                src="/assets/img/icons/icon_close.png"
                                alt="close"
                            />
                        </div>
                    </Link>
                </div>
                <ProductInfo product={product} />
            </section>
        </div>
    );
}

export default ProductDetail;
