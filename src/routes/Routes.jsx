import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

import NewPassWord from "@views/NewPassword/NewPassword";
import RecoveryPassword from "@views/RecoveryPassword/RecoveryPassword";
import Home from "@views/Home/Home";
import NotFound from "@views/NotFound/NotFound";
import EmailSend from "@views/EmailSend/EmailSend";
import Login from "@views/Login/Login";
import MyAccount from "@views/MyAccount/MyAccount";
import CreateAccount from "@views/CreateAccount/CreateAccount";
import ShoppingCart from "../containers/ShoppingCart/ShoppingCart";
import EditAccount from "../views/EditAccount/EditAccount";
import Orders from "../views/Orders/Orders";
import Order from "../views/Order/Order";
import ProductDetail from "../views/ProductDetail/ProductDetail";
import AppContext from "../utils/context/AppContext";
import useInitialState from "../utils/hooks/useInitialState";

function RoutesMusic() {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}>
                        <Route
                            exact
                            path="/product/:productID"
                            element={<ProductDetail />}
                        />
                        <Route exact path="/orders" element={<Orders />} />
                        <Route exact path="/orders/:code" element={<Order />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route
                            exact
                            path="/edit-account"
                            element={<EditAccount />}
                        />
                    </Route>

                    <Route
                        exact
                        path="/new-password"
                        element={<NewPassWord />}
                    />
                    <Route
                        exact
                        path="/recovery-password"
                        element={<RecoveryPassword />}
                    />
                    <Route exact path="/email-send" element={<EmailSend />} />
                    <Route exact path="/login" element={<Login />} />

                    <Route exact path="/singup" element={<CreateAccount />} />

                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default RoutesMusic;
