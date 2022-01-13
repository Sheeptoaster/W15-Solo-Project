import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateUserCheckin } from '../../../store/users';

import * as drinkActions from '../../../store/drinks'
import * as storeActions from '../../../store/stores'

import './EditCheckinModal.css'

function EditCheckinModal({ setShowModal, checkin }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [drink, setDrink] = useState(checkin?.Drink?.name);
    const [location, setLocation] = useState(checkin?.Store?.name);
    const [comment, setComment] = useState(checkin?.comment);

    const stores = useSelector(state => state.stores.stores)
    const drinks = useSelector(state => state.drinks.drinks)

    useEffect(() => {
        dispatch(drinkActions.getDrinks())
        dispatch(storeActions.getStores())
    }, [dispatch])

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
                        <select
                        className="create-checkin-input-drink"
                        value={drink} onChange={(e) => setLocation(e.target.value)}
                        required
                        >
                            {drinks?.drinks?.data?.map((drink) => {
                                return (
                                    <option key={drink.id} value={drink.name}>{drink.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <label className="update-checkin-label-location">
                            Where are you drinking?
                        </label>
                        <select
                        className="create-checkin-input-location"
                        value={location} onChange={(e) => setLocation(e.target.value)}
                        required>
                            {stores?.data?.map((store) => {
                                return (
                                    <option key={store.id} value={store.name}>{store.name}</option>
                                )
                            })}
                        </select>
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
