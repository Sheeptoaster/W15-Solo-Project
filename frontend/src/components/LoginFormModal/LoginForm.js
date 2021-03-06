// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


import './LoginForm.css'

function LoginForm({setShowModal}) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);


    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const handleLink = (e) => {
        e.preventDefault()

        setShowModal(false);

        let path = '/signup';
        return history.push(path);
    }


    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit} className="login-form">

                <ul className='errors-container'>
                    {errors.map((error, idx) => (
                        <li className='errors' key={idx}>{error}</li>
                    ))}
                </ul>

                <h1>Login</h1>

                <div>
                    <label className="login-username-label">
                        Username or Email
                    </label>
                    <input
                        type="text"
                        className="login-username-input"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="login-password-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="login-password-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-submit-btn">Log In</button>


                <button type="submit" onClick={handleLink}>Don't have an account?</button>

            </form>
        </div>
    );
}

export default LoginForm;
