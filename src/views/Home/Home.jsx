import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../containers/Header/Header";
import ProductList from "../../containers/ProductList/ProductList";

function Home() {
    return (
        <>
            <ProductList />
            <Outlet/>
        </>
    );
}

export default Home;
