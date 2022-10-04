import React from "react";
import ProductItem from "@components/ProductItem/ProductItem";
import "./ProductList.scss";
import useGetProducts from "../../utils/hooks/useGetProducts";

function ProductList() {
    const {products} = useGetProducts();
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
