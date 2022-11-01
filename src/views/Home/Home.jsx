import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../containers/Header/Header";
import ProductList from "../../containers/ProductList/ProductList";
import useGetProducts from "../../utils/hooks/useGetProducts";


function Home() {
    const { productsFiltered, setFilterValue } = useGetProducts();
    let { pathname } = useLocation();

    return (
        <>
            <Header setFilterValue={setFilterValue} />
            {pathname === '/' && <ProductList productsFiltered={productsFiltered} />}
            <Outlet />
        </>
    );
}

export default Home;
