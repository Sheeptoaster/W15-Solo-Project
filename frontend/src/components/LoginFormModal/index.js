// frontend/src/components/LoginFormModal/index.js
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = 'Login'
    })

    return (
        <>
            <div className='login-container'>
                <button className="login-btn" onClick={() => setShowModal(true)}>Log In</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm setShowModal={setShowModal} />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default LoginFormModal;
