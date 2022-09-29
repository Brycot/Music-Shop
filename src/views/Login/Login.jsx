import React from "react";
import Button from "@components/Button/Button";
import "./Login.scss";
import logo from "@logos/logo_yard_sale.png";

function Login() {
    const form = React.useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get("email"),
            password: formData.get("password"),
        };
        console.log(data);
    };

    return (
        <div className="login">
            <div className="login-form-container">
                <img src={logo} alt="logo" className="logo" />
                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        className="input input-email"
                    />
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="*********"
                        className="input input-password"
                    />
                    <Button
                        typeButton={"submit"}
                        textButton={"Log In"}
                        type={"primary-button login-button"}
                        onClick={handleSubmit}
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
