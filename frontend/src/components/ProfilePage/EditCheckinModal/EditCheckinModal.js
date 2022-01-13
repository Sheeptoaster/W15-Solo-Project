import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import './EditCheckinModal.css'

function EditCheckinModal({ setShowModal, checkin }) {

    console.log('EDIT MODAL', checkin);
    const dispatch = useDispatch();
    const history = useHistory();

    const [drink, setDrink] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");

    const { id } = useParams();

    console.log('EDIT', checkin);

    const handleSubmit = (e) => {
        e.preventDefault();

        return setShowModal(false)
    }

    const handleCancel = (e) => {
        e.preventDefault();

        return setShowModal(false)
    }

    return (
        <>
            <div className="update-checkin-container">
                <form onSubmit={handleSubmit} className="update-checkin-form">

                    <h1 className="update-user-checkin">Checkin</h1>
                    <div>
                        <label className="update-checkin-label-drink">
                            What did you drink?
                        </label>
                        <input
                            type='text'
                            className="update-checkin-input-drink"
                            value={checkin.Drink?.name}
                            onChange={(e) => setDrink(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="update-checkin-label-location">
                            Where are you drinking?
                        </label>
                        <input
                            type='text'
                            className="update-checkin-input-location"
                            value={checkin.Store?.name}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="update-checkin-label-comment">
                            Comment
                        </label>
                        <input
                            type='textarea'
                            className="update-checkin-input-comment"
                            value={checkin.comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' className="update-checkin-submit-btn">Update Checkin</button>

                    <button type="submit" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default EditCheckinModal;
