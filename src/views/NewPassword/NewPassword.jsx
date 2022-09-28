import React from "react";
import "./NewPassword.scss";
import logo from "@logos/logo_yard_sale.png";
import Button from "../../components/Button/Button";

function NewPassword() {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("creando nueva contraseña")
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for you account</p>
                <form onSubmit={onSubmit} className="form">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <label htmlFor="new-password" className="label">
                        Re-enter Password
                    </label>
                    <input
                        type="password"
                        id="new-password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <Button
                        type={"primary-button login-button"}
                        typeButton={"submit"}
                        textButton={"Confirm"}
                    />
                </form>
            </div>
        </div>
    );
}

export default NewPassword;
