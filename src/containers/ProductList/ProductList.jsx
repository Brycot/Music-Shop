import React from "react";
import ProductItem from "@components/ProductItem/ProductItem";
import "./ProductList.scss";

function ProductList({ productsFiltered }) {
    return (
        <section className="main-container">
            <div className="productList">
                {productsFiltered.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
