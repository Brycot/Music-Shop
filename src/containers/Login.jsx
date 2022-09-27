import React from 'react';
import '../styles/Login.scss';

function Login() {
	return (
		<div className="login">
			<div className="form-container">
				<img src="./assets/img/logos/logo_yard_sale.png" alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for you account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">Re-enter Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<button type="submit" defaultValue="Confirm" className="primary-button login-button">Confirm</button>
				</form>
			</div>
		</div>
	)
}

export default Login