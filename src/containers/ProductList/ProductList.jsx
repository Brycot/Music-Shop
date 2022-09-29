import React from "react";
import ProductItem from "@components/ProductItem/ProductItem";
import "./ProductList.scss";
import useGetProducts from "../../utils/hooks/useGetProducts";

const API = "https://api.escuelajs.co/api/v1/products";
// const API = "../../utils/products.json";

function ProductList() {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="productList">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
