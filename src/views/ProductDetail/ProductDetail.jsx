import React from "react";
import ProductInfo from "../../containers/ProductInfo/ProductInfo";
import './ProductDetail.scss';

function ProductDetail() {
    return (
        <aside className="product-detail-complete">
            <div className="product-detail-close">
                <img src="/assets/img/icons/icon_close.png" alt="close" />
            </div>
            <ProductInfo/>
        </aside>
    );
}

export default ProductDetail;
