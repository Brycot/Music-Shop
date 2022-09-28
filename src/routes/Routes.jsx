import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";
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
import DesktopMenu from "../containers/DesktopMenu/DesktopMenu";
import Orders from "../views/Orders/Orders";

function RoutesMusic() {
    return (
        <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
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
                    <Route exact path="/account" element={<MyAccount />} />
                    <Route exact path="/edit-account" element={<EditAccount />} />
                    <Route exact path="/singup" element={<CreateAccount />} />
                    <Route exact path="/orders" element={<Orders />} />
                    <Route exact path="/shopping-cart" element={<ShoppingCart />} />
                    <Route exact path="/prueba" element={<DesktopMenu />} />
                    <Route exact path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesMusic;
