import React, { useEffect } from 'react';
import './Login.css';
import homeImage from './homeImage.jpg'
import TextField from '@mui/material/TextField';

<TextField id="outlined-basic" label="Outlined" variant="outlined" margin="normal" />

function Login() {
    useEffect(() => {
        const imageContainerHeight = document.querySelector('.image-container').offsetHeight;
        const loginContainer = document.querySelector('.login-container');
        loginContainer.style.height = `${imageContainerHeight}px`;

        window.addEventListener('resize', () => {
            const imageContainerHeight = document.querySelector('.image-container').offsetHeight;
            const loginContainer = document.querySelector('.login-container');
            loginContainer.style.height = `${imageContainerHeight}px`;
        });

    });

    return (
        <div className="home-container">
            <div className="image-container">
                <img className="home-image" src={homeImage} />
            </div>
            <div className="login-container">
                <div className="login-text">
                    <h2>Log In</h2>

                    <p>To access your account</p>
                    <br /><br />
                    <TextField className="textfield" type="email"
                        required
                        label="Email address"
                    /> <br /><br /><br />
                    <TextField className="textfield" type="password"
                        required
                        label="Password"
                    /><br /><br /><br />
                    <button className="button" variant="outlined">Log In</button>

                </div>
                <br />
                <div className="signup-text">
                    <h3>Don't have an account?</h3>
                    <br />
                    <button className="button">Create an account</button>
                </div>
            </div>

        </div>
    )
}
export default Login;