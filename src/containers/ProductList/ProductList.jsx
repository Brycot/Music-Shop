import React from "react";
import ProductItem from "@components/ProductItem/ProductItem";
import "./ProductList.scss";

function ProductList() {
    return (
        <section className="main-container">
            <div className="productList">
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </section>
    );
}

export default ProductList;
