import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CreateCheckinModal from "./CreateCheckinModal/CreateCheckinModal";

function CreateCheckin({ user }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Checkin Here</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateCheckinModal setShowModal={setShowModal} user={user} />
                </Modal>
            )}
        </>
    )
}

export default CreateCheckin;
