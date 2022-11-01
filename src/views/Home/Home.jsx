import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../../containers/Header/Header";
import ProductList from "../../containers/ProductList/ProductList";
import useGetProducts from "../../utils/hooks/useGetProducts";

function Home() {
    const { productID } = useParams();
    const { productsFiltered, setFilterValue } = useGetProducts();
    let { pathname } = useLocation();
    const isHome = pathname === "/" || pathname === `/product/${productID}`;
    return (
        <>
            <Header setFilterValue={setFilterValue} />
            {isHome && <ProductList productsFiltered={productsFiltered} />}
            <Outlet />
        </>
    );
}

export default Home;
