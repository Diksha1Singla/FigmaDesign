import "./login.css"
import LoginLogo from "../../data/images/GridPulseLogo.png"
import React from 'react';

const Login = () => {
    return (
        <div className="login-background">
            <div className="login-container">
                <div className="logo"> {/* Replace with an actual logo image */}
                    <img src={LoginLogo} alt="Grid Pulse Logo" />
                </div>
                <form className="login-form">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
