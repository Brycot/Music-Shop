import { useEffect, useState } from "react";
import productsData from "../products";

const useGetProducts = () => {
    const [filterValue, setFilterValue] = useState("all");
    const [products, setProducts] = useState([]);

    let productsFiltered = [];
    useEffect(() => {
        if (filterValue === "all") {
            setProducts(productsData);
        } else {
            productsFiltered = productsData.filter(
                (product) => product.category === filterValue
            );
            console.log(productsFiltered);
            setProducts(productsFiltered);
        }
    }, [filterValue]);

    return {
        products,
        setFilterValue,
    };
};

export default useGetProducts;
