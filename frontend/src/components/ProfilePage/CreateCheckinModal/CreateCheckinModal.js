import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import * as userActions from '../../../store/users'

import './CreateCheckinModal.css'

function CreateCheckinModal({ setShowModal, user }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [drink, setDrink] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");

    const { id } = useParams()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.addUserCheckin({user, drink, location, comment}))
        dispatch(userActions.getUserCheckins(id))
        return setShowModal(false);
    }
    const handleCancel = (e) => {
        e.preventDefault()
        return setShowModal(false);
    }


    return (
        <>
            <div className="create-checkin-container">
                <form onSubmit={handleSubmit} className="create-checkin-form">

                    <h1 className="create-user-checkin">Checkin</h1>
                    <div>
                        <label className="create-checkin-label-drink">
                            What did you drink?
                        </label>
                        <input
                            type='text'
                            className="create-checkin-input-drink"
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="create-checkin-label-location">
                            Where are you drinking?
                        </label>
                        <input
                            type='text'
                            className="create-checkin-input-location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="create-checkin-label-comment">
                            Comment
                        </label>
                        <input
                            type='textarea'
                            className="create-checkin-input-comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required
                        />
                    </div>

                    <button type='submit' className="create-checkin-submit-btn">Create Checkin</button>

                    <button type="submit" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </>
    )
}

export default CreateCheckinModal;
