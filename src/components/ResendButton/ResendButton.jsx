import React from 'react'
import './ResendButton.scss';

function ResendButton() {
    return (
        <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
        </p>
    )
}

export default ResendButton