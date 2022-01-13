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
            <button onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
