import { useState } from "react";
import productsData from "../products";

const useGetProducts = () => {
    const [products, setProducts] = useState(productsData);
    const [filterValue, setFilterValue] = useState("all");

    let productsFiltered = [];
    
        if (filterValue === "all") {
            productsFiltered = [...products];
        } else {
            productsFiltered = products.filter(
                (product) => product.category === filterValue
            );
        }
    return {
        productsFiltered,
        setFilterValue,
        filterValue,
    };
};

export default useGetProducts;
