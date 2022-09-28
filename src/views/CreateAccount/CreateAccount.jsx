import React from "react";
import Button from "@components/Button/Button";
import "./CreateAccount.scss"

function CreateAccount() {
    return (
        <div className="login">
            <div className="form-container">
                <h1 className="title">My Account</h1>
                <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Pepito Perez"
                            className="input input-name"
                        />
                        <label htmlFor="email" className="label">
                            Email Address
                        </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="pepito@example.com"
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
                    </div>
                    <Button
                        typeButton={"submit"}
                        textButton={"Create Account"}
                        type={"primary-button login-button"}
                    />
                </form>
            </div>
        </div>
    );
}

export default CreateAccount;
