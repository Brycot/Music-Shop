import { useEffect, useState } from "react";
import productsData from "../products";

const useGetProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productsData);
    }, []);

    return products;
}



export default useGetProducts