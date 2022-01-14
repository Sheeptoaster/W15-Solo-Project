// frontend/src/components/SignupFormPage/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import './SignupForm.css'

function SignupFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        document.title = 'Sign Up'
    })


    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="signup-form-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <h1>Sign Up</h1>
                <div className="sign-up-email">
                    <label className="sign-up-email-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="sign-up-email-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <span>Enter Your Email</span>
                </div>

                <div className="sign-up-username">
                    <label className="sign-up-username-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="sign-up-username-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <span>Enter Your Username</span>
                </div>

                <div className="sign-up-password">
                    <label className="sign-up-password-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="sign-up-password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span>Enter Your Password</span>
                </div>

                <div className="sign-up-confirm-password">
                    <label className="sign-up-confirm-password-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="sign-up-confirm-password-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span>Confirm Your Password</span>
                </div>
                <button type="submit" className="sign-up-submit-btn">Sign Up</button>
            </form >
        </div>
    );
}

export default SignupFormPage;
