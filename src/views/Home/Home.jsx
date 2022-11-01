import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../containers/Header/Header";
import ProductList from "../../containers/ProductList/ProductList";
import useGetProducts from "../../utils/hooks/useGetProducts";


function Home() {
    const { productsFiltered, setFilterValue } = useGetProducts();
    return (
        <>
            <Header setFilterValue={setFilterValue} />
            <ProductList productsFiltered={productsFiltered} />
            <Outlet />
        </>
    );
}

export default Home;
