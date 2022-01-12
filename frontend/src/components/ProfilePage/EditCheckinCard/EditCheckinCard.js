import React, { useState } from "react";
import { Modal } from '../../../context/Modal';

import EditCheckinModal from "../EditCheckinModal/EditCheckinModal";




function EditCheckinCard({ check, user }) {
    const [showModal, setShowModal] = useState(false);
    console.log(user);
    return (
        <div key={check.id} className="profile-checkin-card" id={check.id}>

            <div className="checkin-user-info-container">
                <img src={user.avatarUrl} className="checkin-user-avatar"></img>
                <h3 className="checkin-user-username">{user.username}</h3>
            </div>

            <div className="checkin-info-container">
                <h4 className="checkin-user-drink-name">{check.Drink.name}</h4>
                <h4 className="checkin-user-store-name">{check.Store.name}</h4>
            </div>

            <h4 className="checkin-user-comment">{check.comment}</h4>

            <div
                className="user-checkin-edit-and-delete"
            >
                <button
                    className="user-checkin-edit"
                    onClick={() => setShowModal(true)}
                >Edit</button>

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditCheckinModal
                            setShowModal={setShowModal}
                            checkin={check}
                        />
                    </Modal>
                )}

                <button className="user-checkin-delete">Delete</button>
            </div>

        </div>
    )
}

export default EditCheckinCard;
