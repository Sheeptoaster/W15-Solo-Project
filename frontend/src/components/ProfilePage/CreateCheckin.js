import React, { useState } from "react";
import { Modal } from "../../context/Modal";

import CreateCheckinModal from "./CreateCheckinModal/CreateCheckinModal";

import './CreateCheckin.css'

function CreateCheckin({ user, sessionUser }) {
    const [showModal, setShowModal] = useState(false);

    if (user.id === sessionUser?.id) {
        return (
            <div className="btn-create-checkin">
                <button className="create-checkin-button"
                    onClick={() => setShowModal(true)}>
                    Checkin Here
                </button>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateCheckinModal setShowModal={setShowModal} user={user} />
                    </Modal>
                )}
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default CreateCheckin;
