import React from "react";
import Button from "../../components/Button/Button";
import "./Login.scss";
import logo from "@logos/logo_yard_sale.png";
function Login() {
    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form">
                    <label htmlFor="email" className="label">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="example@email.com"
                        className="input input-email"
                    />
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <Button
                        typeButton={"submit"}
                        textButton={"Log In"}
                        type={"primary-button login-button"}
                    />
                    <a href="/">Forgot my password</a>
                </form>
                <Button
                    typeButton={"button"}
                    textButton={"Sing Up"}
                    type={"secondary-button singup-button"}
                />
            </div>
        </div>
    );
}

export default Login;
