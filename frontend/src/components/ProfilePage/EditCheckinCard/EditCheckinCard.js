import React, { useEffect, useState } from "react";
import { Modal } from '../../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditCheckinModal from "../EditCheckinModal/EditCheckinModal";

import * as userActions from '../../../store/users';

import './EditCheckinCard.css'


function EditCheckinCard({ check, user }) {
    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(userActions.deleteUserCheckin(check.id))
    }



    const [showModal, setShowModal] = useState(false);
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

                <button onClick={handleDelete} className="user-checkin-delete">Delete</button>
            </div>

        </div>
    )
}

export default EditCheckinCard;
