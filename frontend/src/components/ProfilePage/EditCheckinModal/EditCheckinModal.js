import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateUserCheckin } from '../../../store/users';

import './EditCheckinModal.css'

function EditCheckinModal({ setShowModal, checkin }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [drink, setDrink] = useState(checkin?.Drink?.name);
    const [location, setLocation] = useState(checkin?.Store?.name);
    const [comment, setComment] = useState(checkin?.comment);

    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserCheckin(checkin.id, { drink, location, comment }))
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
                            value={drink}
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
                            value={location}
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
                            value={comment}
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
