import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import * as userActions from '../../../store/users'
import * as drinkActions from '../../../store/drinks'
import * as storeActions from '../../../store/stores'

import './CreateCheckinModal.css'

function CreateCheckinModal({ setShowModal, user }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [drink, setDrink] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    const { id } = useParams()

    const stores = useSelector(state => state.stores.stores)
    const drinks = useSelector(state => state.drinks.drinks)

    useEffect(() => {
        dispatch(drinkActions.getDrinks())
        dispatch(storeActions.getStores())
        dispatch(userActions.getUserCheckins(id))
        document.title = 'Checkin';
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([])

        dispatch(userActions.getUserCheckins(id))

        dispatch(userActions.addUserCheckin({ user, drink, location, comment }))

        return setShowModal(false)
    }
    const handleCancel = (e) => {
        e.preventDefault()
        return setShowModal(false);
    }


    return (
        <>

            <div className="create-checkin-container">
                <form onSubmit={handleSubmit} className="create-checkin-form">

                    <ul className='errors-container'>
                        {errors.map((error, idx) => (
                            <li className='errors' key={idx}>{error}</li>
                        ))}
                    </ul>

                    <h1 className="create-user-checkin">Checkin</h1>
                    <div>
                        <label className="create-checkin-label-drink">
                            What did you drink?
                        </label>
                        <select
                            className="create-checkin-input-drink"
                            value={drink}
                            onChange={(e) => setDrink(e.target.value)}
                            required
                        >
                            <option value="" disabled>Please select a Drink</option>
                            {drinks?.drinks?.data?.map((drink) => {
                                return (
                                    <option
                                        key={drink.id}
                                        value={drink.name}
                                        onClick={(e) => setDrink(e.target.value)}
                                    >{drink.name}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <label className="create-checkin-label-location">
                            Where are you drinking?
                        </label>
                        <select
                            className="create-checkin-input-location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required>
                                <option value="" disabled>Please select a Bar</option>
                            {stores?.data?.map((store) => {
                                return (
                                    <option
                                        key={store.id}
                                        value={store.name}
                                        onClick={(e) => setLocation(e.target.value)}
                                    >{store.name}</option>
                                )
                            })}
                        </select>
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
