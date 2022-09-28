import React from "react";
import Button from "@components/Button/Button";
import "./MyAccount.scss";

function MyAccount() {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My Account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <p className="value">Pepito Perez</p>
                        <label htmlFor="email" className="label">
                            Email Address
                        </label>
                        <p className="value">pepito@example.com</p>
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <p className="value">*********</p>
                    </div>
                    <Button
                        typeButton={"submit"}
                        textButton={"Edit"}
                        type={"secondary-button login-button"}
                    />
                </form>
            </div>
        </div>
    );
}

export default MyAccount;
