import React from "react";
import "./EmailSend.scss";
import logo from "@logos/logo_yard_sale.png";
import iconEmail from "@icons/email.png";
import Button from "../../components/Button/Button";
import ResendButton from "../../components/ResendButton/ResendButton";

function EmailSend() {
    return (
        <div className="email-send">
            <div className="email-send-form-container">
                <img src={logo} alt="logo" className="logo" />
                <h1 className="email-send-title">Email has ben sent</h1>
                <p className="subtitle">
                    Please check your inbox for instructions <br />
                    on how to reset the password
                </p>
                <div className="email-image">
                    <img src={iconEmail} alt="email" />
                </div>
                <Button
                    type={"primary-button login-button"}
                    textButton={"Login"}
                />
                <ResendButton />
            </div>
        </div>
    );
}

export default EmailSend;
