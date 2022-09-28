import React from "react";
import Button from "@components/Button/Button";
import "./RecoveryPassword.scss";
function RecoveryPassword() {
    return (
        <div className="Recovery-Password">
            <div className="Recovery-Password-form-container">
                <img
                    src="./assets/img/logos/logo_yard_sale.png"
                    alt="logo"
                    className="logo"
                />
                <h1 className="title">Password recovery</h1>
                <p className="subtitle">
                    Inform the email address used <br />
                    to create to your account
                </p>
                <form action="/" className="form">
                    <label htmlFor="email" className="label">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        placeholder="pepito@example.com"
                        className="input input-email"
                    />
                    <Button
                        typeButton={"submit"}
                        textButton={"Confirm"}
                        type={"primary-button login-button"}
                    />
                    <a href="/">Back to log in</a>
                </form>
            </div>
        </div>
    );
}

export default RecoveryPassword;
